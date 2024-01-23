import { Body, Controller, Post } from '@nestjs/common'
import { MessagesService } from './messages.service'
import { PostMessageDto } from './dtos/post-message.dto'

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post()
  postMessage(@Body() { name, email, message, consent }: PostMessageDto) {
    return this.messagesService.postMessage(name, email, message, consent)
  }
}
