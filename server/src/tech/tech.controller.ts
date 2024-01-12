import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common'
import { TechService } from './tech.service'
import { UploadImage } from 'src/decorators/upload-image.decorator'
import { AuthGuard } from 'src/guards/auth.guard'
import { SharpImage } from 'src/decorators/sharp-image.decorator'
import { CreateTechDto } from './dtos/create-tech.dto'

@Controller('tech')
export class TechController {
  constructor(private techService: TechService) {}

  @UseGuards(AuthGuard)
  @Post()
  @UploadImage('icon')
  createTech(
    @Body() { heading, text, category }: CreateTechDto,
    @SharpImage(50) icon: string
  ) {
    return this.techService.createTech(heading, text, category, icon)
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
