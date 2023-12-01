import { Exclude, Expose } from "class-transformer";
import mongoose from "mongoose";

export class UserDto {
  @Expose()
  email: string

  @Expose()
  id: mongoose.Schema.Types.ObjectId

  @Expose()
  promotions: mongoose.Schema.Types.ObjectId[]
}