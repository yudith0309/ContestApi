import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type ExcerciseDocument = HydratedDocument<Excercise>;

@Schema()
export class Excercise {
  @Prop({ required: true, unique: true })
  tile: string;

  @Prop()
  description: string;

  @Prop()
  questions: string

  @Prop()
  answers: string
}



export const ExcerciseSchema = SchemaFactory.createForClass(Excercise);