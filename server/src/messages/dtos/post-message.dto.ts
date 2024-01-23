import { IsBoolean, IsEmail, IsString } from 'class-validator'

export class PostMessageDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  message: string

  @IsBoolean()
  consent: boolean
}
