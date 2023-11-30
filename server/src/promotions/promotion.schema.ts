import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { User } from 'src/users/user.schema'

export type HydratedPromotion = HydratedDocument<Promotion>

@Schema()
export class Promotion {
  @Prop({ required: true })
  text: string

  @Prop({ required: true })
  image: string

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
  creator: User
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion)