import { BadRequestException, Body, Controller, ForbiddenException, NotFoundException, Post, Session } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { Promotion } from './promotion.schema';

@Controller('promotions')
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) { }

  @Post()
  async createPromotion(@Body() { text, image }: Promotion, @Session() { userId }: any) {
    if (!userId) {
      throw new ForbiddenException('You must be logged in to post the promotion')
    }

    const promotion = await this.promotionsService.createPromotion(text, image, userId)

    return promotion
  }
}
