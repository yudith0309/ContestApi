import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  number_identity: number;

  @Prop()
  age: number;

  @Prop()
  adress: string;

  @Prop()
  scool: string

  @Prop()
  degree_studies: number
}

export const StudentSchema = SchemaFactory.createForClass(Student);