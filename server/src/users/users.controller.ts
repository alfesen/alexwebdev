import { Body, Controller, Post, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.schema';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  async createUser(@Body() { email, password }: User, @Session() session: any) {
    const user = await this.authService.createUser(email, password)
    session.userId = user._id
    return user
  }

  @Post('signin')
  async login(@Body() { email, password }: User, @Session() session: any) {
    const user = await this.authService.login(email, password)
    session.userId = user._id
    return this.authService.login(email, password)
  }
}
