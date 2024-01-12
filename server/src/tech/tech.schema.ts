import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type HydratedTech = HydratedDocument<Tech>

@Schema({})
export class TechItem {
  @Prop({ required: true })
  heading: string

  @Prop({ required: true })
  text: string

  @Prop({ required: true })
  icon: string

  @Prop({ required: true })
  category: string
}

class ITech {
  categories: {
    [category: string]: [TechItem]
  }
}

@Schema()
export class Tech {
  @Prop({type: ITech})
  categories: {
    [category: string]: TechItem[]
  }
}

export const TechSchema = SchemaFactory.createForClass(Tech)
