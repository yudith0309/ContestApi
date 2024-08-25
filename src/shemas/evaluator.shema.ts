import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Chat } from './chat.shema';
import { Contents } from './contents.shema';
import { Help } from './help.shema';


export type EvaluatorDocument = HydratedDocument<Evaluator>;

@Schema()
export class Evaluator {
  @Prop({required:true,unique:true})
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  number_identity:number;

  @Prop()
  age: number;

  @Prop()
  adress: string;

  @Prop()
  scool: string

}

export const EvaluatorSchema = SchemaFactory.createForClass(Evaluator);