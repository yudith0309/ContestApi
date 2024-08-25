import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type LibraryDocument = HydratedDocument<Library>;

@Schema()
export class Library {
  @Prop({required:true,unique:true})
  name: string;  

  @Prop()
  description: string;  

  @Prop()
  url:string
}

export const LibrarySchema = SchemaFactory.createForClass(Library);