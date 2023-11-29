import { IsEmail, IsStrongPassword } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minSymbols: 0
  })
  password: string
}