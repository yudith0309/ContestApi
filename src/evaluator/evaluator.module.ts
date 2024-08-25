import { Module } from '@nestjs/common';
import { EvaluatorService } from './evaluator.service';
import { EvaluatorController } from './evaluator.controller';
import {Evaluator, EvaluatorSchema } from 'src/shemas/evaluator.shema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Evaluator.name, schema: EvaluatorSchema }])],

  providers: [EvaluatorService],
  controllers: [EvaluatorController]
})
export class EvaluatorModule {}
