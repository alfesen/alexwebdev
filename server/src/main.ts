import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { UploadExceptionFilter } from "./filters/upload-exception.filter";
import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.ADMIN_CLIENT, process.env.CLIENT],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: process.env.COOKIE_KEY,
      resave: false,
      saveUninitialized: false,
    })
  );
  app.useGlobalFilters(new UploadExceptionFilter());
  await app.listen(3000);
}
bootstrap();
