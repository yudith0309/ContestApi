import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {
  @Prop({required:true,unique:true})
  name: string;

  @Prop()
  date: Date

  @Prop()
  description: string;  
}

export const ChatSchema = SchemaFactory.createForClass(Chat);