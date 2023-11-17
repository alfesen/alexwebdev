import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
const cookieSession = require('cookie-session')

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  console.log(cookieSession)
  app.use(
    cookieSession({
      keys: ['38hf8sStydEfa8233Fxvifa2'],
    })
  )
  await app.listen(3000)
}
bootstrap()
