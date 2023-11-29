import { Injectable } from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

const scrypt = promisify(_scrypt)

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async createUser(email: string, password: string) {
    const salt = randomBytes(8).toString('hex')
    const hash = await scrypt(password, salt, 32) as Buffer
    const result = `${salt}.${hash.toString('hex')}`

    const user = new this.userModel({ email, password: result })


    user.save()

    return user
  }
}