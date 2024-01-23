import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Message {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  message: string

  @Prop({ required: true })
  consent: true
}

export const MessageSchema = SchemaFactory.createForClass(Message)