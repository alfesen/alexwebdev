import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { randomBytes, scrypt as _sc } from 'crypto'
import { promisify } from 'util'

const scrypt = promisify(_sc)

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async createUser(email: string, password: string) {
    const existingUser = await this.usersService.findUser(email)
    if (existingUser) {
      throw new BadRequestException('Administrator is already set')
    }
    const salt = randomBytes(8).toString('hex')
    const hash = (await scrypt(password, salt, 32)) as Buffer
    const result = `${salt}.${hash.toString('hex')}`
    const user = await this.usersService.createUser(email, result)

    return user
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findUser(email)
    if (!user) {
      throw new NotFoundException('No user with a given credentials')
    }
    const [salt, storedHash] = user.password.split('.')
    const hash = (await scrypt(password, salt, 32)) as Buffer
    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Invalid password')
    }

    return user
  }
}
