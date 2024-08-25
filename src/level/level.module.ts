import { Module } from '@nestjs/common';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';
import { Level,LevelSchema } from 'src/shemas/level.shema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Level.name, schema: LevelSchema }])],
  controllers: [LevelController],
  providers: [LevelService]
})
export class LevelModule {}
