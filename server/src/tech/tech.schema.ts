import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { IsString } from "class-validator"
import { HydratedDocument } from "mongoose"

export type HydratedTech = HydratedDocument<Tech>

@Schema()
export class Tech {
  @IsString()
  @Prop({ required: true })
  heading: string

  @IsString()
  @Prop({ required: true })
  text: string

  @Prop({ required: true })
  icon: string
}

export const TechSchema = SchemaFactory.createForClass(Tech)
