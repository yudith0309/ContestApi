import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { Chat,ChatSchema } from 'src/shemas/chat.shema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }])],

  controllers: [ChatController],
  providers: [ChatService]
})
export class ChatModule {}
