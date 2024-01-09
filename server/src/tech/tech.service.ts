import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Tech } from './tech.schema'
import { Model } from 'mongoose'

@Injectable()
export class TechService {
  constructor(@InjectModel(Tech.name) private techModel: Model<Tech>) {}

  async createTech(
    heading: string,
    text: string,
    category: string,
    icon: string
  ) {
    const storedTech = await this.techModel.findOne({ heading })

    if (storedTech) {
      throw new BadRequestException('Tech with a given heading already exists')
    }

    const tech = new this.techModel({
      heading,
      text,
      category,
      icon,
    })

    tech.save()

    return tech.toObject({ getters: true })
  }

  async getAllTechs() {
    const storedTechs = await this.techModel.find()
    if (!storedTechs) {
      throw new NotFoundException('No techs were found')
    }

    return storedTechs.map((tech) => tech.toObject({ getters: true }))
  }

  async getSingleTech(id: string) {
    const tech = await this.techModel.findById(id)
    if (!tech)
      throw new NotFoundException('The tech with a given id was not found')
    return tech.toObject({ getters: true })
  }
}
