import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Tech, TechSchema } from './tech.schema'
import { TechController } from './tech.controller'
import { TechService } from './tech.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tech.name, schema: TechSchema }]),
  ],
  controllers: [TechController],
  providers: [TechService],
})
export class TechModule {}
