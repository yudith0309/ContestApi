import { Module } from '@nestjs/common';
import { HelpController } from './help.controller';
import { HelpService } from './help.service';
import {Help, HelpSchema } from 'src/shemas/help.shema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Help.name, schema: HelpSchema }])],
  controllers: [HelpController],
  providers: [HelpService]
})
export class HelpModule {}
