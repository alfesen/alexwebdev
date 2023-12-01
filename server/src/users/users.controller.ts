import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.schema';

@Controller('users')
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
