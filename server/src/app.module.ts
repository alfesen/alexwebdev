import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env.development'
  }), MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => {
      return {
        uri: configService.get<string>('DB_URI')
      }
    },
    inject: [ConfigService]
  }), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
