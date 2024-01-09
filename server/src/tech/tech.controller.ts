import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
} from '@nestjs/common'
import { TechService } from './tech.service'
import { Tech } from './tech.schema'
import { UploadImage } from 'src/decorators/upload-image.decorator'

@Controller('tech')
export class TechController {
  constructor(private techService: TechService) {}

  @Post()
  @UploadImage('icon')
  async createTech(
    @Body() { heading, text }: Tech,
    @UploadedFile()
    icon: Express.Multer.File
  ) {
    const result = await this.techService.createTech(heading, text, icon.path)
    return result
  }

  @Get()
  getAllTechs() {
    return this.techService.getAllTechs()
  }
}
