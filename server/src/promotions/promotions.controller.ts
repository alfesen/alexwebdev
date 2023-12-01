import { Body, Controller, Post, Session, UseGuards } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { Promotion } from './promotion.schema';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('promotions')
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) { }

  @UseGuards(AuthGuard)
  @Post()
  async createPromotion(@Body() { text, image }: Promotion, @Session() { userId }: any) {
    const promotion = await this.promotionsService.createPromotion(text, image, userId)

    return promotion
  }
}
