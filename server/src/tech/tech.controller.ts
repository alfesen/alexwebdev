import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
} from '@nestjs/common'
import { TechService } from './tech.service'
import { Tech } from './tech.schema'
import { UploadImage } from 'src/decorators/upload-image.decorator'
import { AuthGuard } from 'src/guards/auth.guard'

@Controller('tech')
export class TechController {
  constructor(private techService: TechService) {}

  @UseGuards(AuthGuard)
  @Post()
  @UploadImage('icon')
  createTech(
    @Body() { heading, text, category }: Tech,
    @UploadedFile()
    icon: Express.Multer.File
  ) {
    return this.techService.createTech(heading, text, category, icon.path)
  }

  @Get()
  getAllTechs() {
    return this.techService.getAllTechs()
  }

  @Get('/:id')
  getSingleTech(@Param('id') id: string) {
    return this.techService.getSingleTech(id)
  }
}
