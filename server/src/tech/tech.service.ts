import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Tech } from "./tech.schema"
import { Model } from "mongoose"

@Injectable()
export class TechService {
  constructor(@InjectModel(Tech.name) private techModel: Model<Tech>) {}

  async createTech(
    heading: string,
    text: string,
    category: string,
    icon: string,
  ) {
    const tech = await this.techModel.findOne()

    if (!tech) {
      await this.createTechWithCategory(heading, text, category, icon)
    } else if (!tech.categories[category]) {
      await this.updateTechWithNewCategory(tech, heading, text, category, icon)
    } else {
      this.checkExistingTech(tech, category, heading)
      await this.updateTechWithExistingCategory(
        tech,
        heading,
        text,
        category,
        icon,
      )
    }
  }

  private async createTechWithCategory(
    heading: string,
    text: string,
    category: string,
    icon: string,
  ) {
    const newCategory = new this.techModel({
      categories: {
        [category]: [
          {
            category,
            heading,
            icon,
            text,
          },
        ],
      },
    })

    this.validateAndSave(newCategory)
  }

  private async updateTechWithNewCategory(
    tech: any,
    heading: string,
    text: string,
    category: string,
    icon: string,
  ) {
    const updateQuery = {
      $set: {
        categories: {
          ...tech.categories,
          [category]: [
            {
              category,
              heading,
              icon,
              text,
            },
          ],
        },
      },
    }

    await this.updateTech(tech, updateQuery)
  }

  private checkExistingTech(tech: any, category: string, heading: string) {
    const existingTech = tech.categories[category]?.find(
      (c: any) => c.heading === heading,
    )

    if (existingTech) {
      throw new BadRequestException(
        "The tech with a given heading already exists in this category",
      )
    }
  }

  private async updateTechWithExistingCategory(
    tech: any,
    heading: string,
    text: string,
    category: string,
    icon: string,
  ) {
    const updateQuery = {
      $push: {
        [`categories.${category}`]: {
          category,
          heading,
          icon,
          text,
        },
      },
    }

    await this.updateTech(tech, updateQuery)
  }

  private async updateTech(tech: any, updateQuery: any) {
    try {
      await this.techModel.updateOne({ _id: tech._id }, updateQuery)
      const updatedTech = await this.techModel.findById(tech._id)
      return updatedTech.toObject({ getters: true })
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  private async validateAndSave(newCategory: any) {
    const error = newCategory.validateSync()
    if (error) {
      throw new BadRequestException(error.message)
    }

    try {
      await newCategory.save()
      return newCategory.toObject({ getters: true })
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async getAllTechs() {
    const storedTechs = await this.techModel.find()
    if (!storedTechs || storedTechs.length === 0) {
      throw new NotFoundException("No techs were found")
    }

    return storedTechs[0].toObject({ getters: true })
  }

  async getSingleTech(id: string) {
    const tech = await this.techModel.findById(id)
    if (!tech)
      throw new NotFoundException("The tech with a given id was not found")
    return tech.toObject({ getters: true })
  }
}
