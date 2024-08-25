import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { HydratedDocument } from 'mongoose';

export type ContentsDocument = HydratedDocument<Contents>;

@Schema()
export class Contents {
  @Prop({required:true,unique:true})
  title: string;  
  @Prop()
  description: string;  
}

export const ContentsSchema = SchemaFactory.createForClass(Contents);