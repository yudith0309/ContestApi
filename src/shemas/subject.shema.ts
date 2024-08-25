import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type SubjectDocument = HydratedDocument<Subject>;

@Schema()
export class Subject {
  @Prop({required:true,unique:true})
  name: string;  

  @Prop()
  description: string; 
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);