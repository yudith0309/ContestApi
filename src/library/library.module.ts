import { Module } from '@nestjs/common';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';
import {Library, LibrarySchema } from 'src/shemas/library.shema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Library.name, schema: LibrarySchema }])],
  controllers: [LibraryController],
  providers: [LibraryService]
})
export class LibraryModule {}
