import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { IsString, IsUrl } from "class-validator"
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

  @IsUrl()
  @Prop({ required: true })
  image: string
}

export const TechSchema = SchemaFactory.createForClass(Tech)
