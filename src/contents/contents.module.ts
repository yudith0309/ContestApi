import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { Contents,ContentsSchema } from 'src/shemas/contents.shema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Contents.name, schema: ContentsSchema }])],
  controllers: [ContentsController],
  providers: [ContentsService]
})
export class ContentsModule {}
