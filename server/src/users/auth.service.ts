import { Injectable } from '@nestjs/common'
import { UsersService } from './users.service'
import { randomBytes, scrypt as _sc } from 'crypto'
import { promisify } from 'util'

const scrypt = promisify(_sc)

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async createUser(email: string, password: string) {
    const salt = randomBytes(8).toString('hex')
    const hash = (await scrypt(password, salt, 32)) as Buffer
    const result = `${salt}.${hash.toString('hex')}`
    const user = await this.usersService.createUser(email, result)

    return user
  }
}
