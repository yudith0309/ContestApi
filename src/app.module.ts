import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentsModule } from './contents/contents.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EvaluatorModule } from './evaluator/evaluator.module';
import { LibraryModule } from './library/library.module';
import { ChatModule } from './chat/chat.module';
import { ExerciseModule } from './exercise/exercise.module';
import { SubjectModule } from './subject/subject.module';
import { HelpModule } from './help/help.module';
import { LevelModule } from './level/level.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27018/concurso'),
  StudentsModule,
  ContentsModule,
  AuthModule,
  UsersModule,
  EvaluatorModule,
  LibraryModule,
  ChatModule,
  ExerciseModule,
  SubjectModule,
  HelpModule,
  LevelModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
