import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private authService: AuthService) { }

  @Post('signup')
  createUser(@Body() { email, password }: CreateUserDto) {
    return this.authService.createUser(email, password)
  }
  
  @Post('signin')
  login(@Body() { email, password }: CreateUserDto) {
    return this.authService.login(email, password)
  }

}
