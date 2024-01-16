import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common"
import { InjectConnection, InjectModel } from "@nestjs/mongoose"
import { Tech } from "./tech.schema"
import { Connection, Model } from "mongoose"
import { TechCategory } from "./tech-category.schema"

@Injectable()
export class TechService {
  constructor(
    @InjectModel("Tech") private techModel: Model<Tech>,
    @InjectModel("TechCategory") private techCategoryModel: Model<TechCategory>,
    @InjectConnection() private connection: Connection,
  ) {}

  async createTech(
    heading: string,
    text: string,
    category: string,
    icon: string,
  ) {
    const searchedCategory = await this.findOrCreateCategory(category)

    const existingTech = await this.techModel.findOne({ heading, category })

    if (existingTech) {
      throw new BadRequestException(
        "The tech with a given name already exists in this category",
      )
    }

    const tech = new this.techModel({
      heading,
      text,
      category,
      icon,
    })

    const techErrors = tech.validateSync()

    if (techErrors) throw new BadRequestException(techErrors.message)

    try {
      await tech.save()
    } catch (error) {
      throw new BadRequestException(error.message)
    }

    const session = await this.connection.startSession()
    session.startTransaction()

    try {
      searchedCategory.items.push(tech.id)
      await searchedCategory.save()
      await session.commitTransaction()
    } catch (error) {
      await session.abortTransaction()
      throw new BadRequestException(error.message)
    }

    return searchedCategory.toObject({ getters: true })
  }

  private async findOrCreateCategory(category: string) {
    let searchedCategory = await this.techCategoryModel.findOne({ category })
    if (!searchedCategory) {
      searchedCategory = new this.techCategoryModel({
        category,
        items: [],
      })
      try {
        await searchedCategory.save()
      } catch (error) {
        throw new BadRequestException(error.message)
      }
    }

    return searchedCategory
  }

  async getAllTechs() {
    const storedTechCategories = await this.techCategoryModel.find()
    if (!storedTechCategories || storedTechCategories.length === 0) {
      throw new NotFoundException("No techs were found")
    }

    const techs = await this.techModel.find()

    const categories = storedTechCategories.map((c) => ({
      [c.category]: techs.filter((t) => t.category === c.category),
    }))

    const mergedCategoryObject = Object.assign({}, ...categories)

    return mergedCategoryObject
  }

  async getSingleTech(id: string) {
    const tech = await this.techModel.findById(id)
    if (!tech)
      throw new NotFoundException("The tech with a given id was not found")
    return tech.toObject({ getters: true })
  }
}
