import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Message } from './message.schema'

@Injectable()
export class MessagesService {
  constructor(@InjectModel('Message') private messageModel: Model<Message>) {}

  async postMessage(name: string, email: string, message: string, consent: boolean) {
    const newMessage = new this.messageModel({name, email, message, consent})

    const validationError = newMessage.validateSync()

    if(validationError) {
      throw new BadRequestException(validationError.message)
    }

    newMessage.save()

    return {message: 'Your message was successfully sent, I will answer as soon as possible. Thank you for the contact.'}
  }
}
