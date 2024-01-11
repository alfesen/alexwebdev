import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Promotion } from './promotion.schema';
import { User } from 'src/users/user.schema';

@Injectable()
export class PromotionsService {
  constructor(@InjectModel('Promotion') private promotionModel: Model<Promotion>, @InjectModel('User') private userModel: Model<User>, @InjectConnection() private connection: Connection) { }

  async createPromotion(text: string, imageUrl: string, creator: string) {
    const promotion = new this.promotionModel({
      text,
      image: imageUrl,
      creator
    })

    const error = promotion.validateSync()

    if (error) {
      throw new BadRequestException(error.message)
    }

    await promotion.save()

    const session = await this.connection.startSession()
    session.startTransaction()

    try {
      const user = await this.userModel.findById(creator)
      if (!user) {
        throw new NotFoundException('User not found')
      }
      const promotions = user.promotions
      promotions.push(promotion.id)

      await user.save()
      await session.commitTransaction()
    } catch (error) {
      await session.abortTransaction()
      throw new BadRequestException(error.message)
    } finally {
      session.endSession()
    }

    return promotion
  }
}
