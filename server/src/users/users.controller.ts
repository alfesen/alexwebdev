import { Body, Controller, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { AuthService } from './auth.service'
import { CreateUserDto } from './dtos/create-user.dto'

@Controller('auth')
export class UsersController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Post('signup')
  async createUser(@Body() { email, password }: CreateUserDto) {
    const user = await this.authService.createUser(email, password)
    return user
  }
}
