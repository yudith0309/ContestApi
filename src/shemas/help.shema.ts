import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type HelpDocument = HydratedDocument<Help>;

@Schema()
export class Help {
  @Prop({required:true,unique:true})
  name: string;  

  @Prop()
  description: string;  
}

export const HelpSchema = SchemaFactory.createForClass(Help);