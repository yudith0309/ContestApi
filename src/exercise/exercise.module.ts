import { Module } from '@nestjs/common';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import {Excercise, ExcerciseSchema } from 'src/shemas/exercise.shema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Excercise.name, schema: ExcerciseSchema }])],
  controllers: [ExerciseController],
  providers: [ExerciseService]
})
export class ExerciseModule {}
