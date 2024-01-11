import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common'
import { PromotionsService } from './promotions.service'
import { AuthGuard } from 'src/guards/auth.guard'
import { UploadImage } from 'src/decorators/upload-image.decorator'
import { Request } from 'express'
import { PromotionDto } from './dtos/promotion.dto'
import { SharpImage } from 'src/decorators/sharp-image.decorator'

@Controller('promotions')
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) {}

  @UseGuards(AuthGuard)
  @Post()
  @UploadImage('image')
  async createPromotion(
    @Body() { text }: PromotionDto,
    @Req() request: Request,
    @SharpImage(1200) image: string
  ) {
    const cookies = request.headers.cookie
    const cookiesArray: string[] = cookies ? cookies.split('; ') : []
    const isAuthCookie = cookiesArray.find((cookie) =>
      cookie.startsWith('isAuth=')
    )

    const userId = isAuthCookie.split('=')[1]

    const promotion = await this.promotionsService.createPromotion(
      text,
      image,
      userId
    )

    return promotion
  }
}
