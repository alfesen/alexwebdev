import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { UploadExceptionFilter } from './filters/upload-exception.filter'
import * as session from 'express-session'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

async function bootstrap() {
  const corsOptions: CorsOptions = {
    origin: process.env.ADMIN_CLIENT,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }
  const app = await NestFactory.create(AppModule)
  app.enableCors(corsOptions)
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.use(
    session({
      secret: process.env.COOKIE_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        domain: process.env.ADMIN_CLIENT,
        secure: true
      }
    })
  )

  app.useGlobalFilters(new UploadExceptionFilter())
  await app.listen(3000)
}
bootstrap()
