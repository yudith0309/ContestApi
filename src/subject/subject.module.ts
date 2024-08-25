import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Subject, SubjectSchema } from 'src/shemas/subject.shema';


@Module({
  imports:[MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }])],

  providers: [SubjectService],
  controllers: [SubjectController]
})
export class SubjectModule {}
