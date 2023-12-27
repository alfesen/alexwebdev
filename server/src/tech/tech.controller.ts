import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { TechService } from "./tech.service"
import { Tech } from "./tech.schema"

@Controller("tech")
export class TechController {
  constructor(private techService: TechService) {}

  @Post()
  @UseInterceptors(FileInterceptor("icon"))
  async createTech(
    @Body() { heading, text }: Tech,
    @UploadedFile() icon: Express.Multer.File
  ) {
    console.log(icon.path)
    return this.techService.createTech(heading, text, icon.path)
  }
}
