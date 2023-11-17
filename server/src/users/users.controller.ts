import { Body, Controller, Post, Session } from '@nestjs/common'
import { UsersService } from './users.service'
import { AuthService } from './auth.service'
import { CreateUserDto } from './dtos/create-user.dto'
import { Serialize } from 'src/interceptors/serialize.interceptor'
import { UserDto } from './dtos/user.dto'

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Post('signup')
  async createUser(
    @Body() { email, password }: CreateUserDto,
    @Session() session: any
  ) {
    const user = await this.authService.createUser(email, password)
    session.userId = user.id
    return user
  }

  @Post('login')
  async login(
    @Body() { email, password }: CreateUserDto,
    @Session() session: any
  ) {
    const user = await this.authService.login(email, password)
    session.userId = user.id
    return user
  }
}
