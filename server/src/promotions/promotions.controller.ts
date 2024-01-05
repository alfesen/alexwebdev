import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UseGuards,
} from '@nestjs/common'
import { PromotionsService } from './promotions.service'
import { AuthGuard } from 'src/guards/auth.guard'
import { UploadImage } from 'src/decorators/upload-image.decorator'
import { Request } from 'express'
import { PromotionDto } from './dtos/promotion.dto'

@Controller('promotions')
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) {}

  @UseGuards(AuthGuard)
  @Post()
  @UploadImage('image')
  async createPromotion(
    @Body() { text }: PromotionDto,
    @Req() request: Request,
    @UploadedFile() image: Express.Multer.File
  ) {
    const cookies = request.headers.cookie
    const cookiesArray: string[] = cookies ? cookies.split('; ') : []
    const isAuthCookie = cookiesArray.find((cookie) =>
      cookie.startsWith('isAuth=')
    )

    const userId = isAuthCookie.split('=')[1]

    const promotion = await this.promotionsService.createPromotion(
      text,
      image.path,
      userId
    )

    return promotion
  }
}
