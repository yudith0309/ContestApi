import {
    Controller, Get, Post, Body,
    Param, Put, Delete, ConflictException,
    NotFoundException,HttpCode
  }
    from '@nestjs/common';
  
  import { ContentsService } from './contents.service';
  
  @Controller('contents')
  export class ContentsController {
    constructor(private contentsService: ContentsService) { }
  
    @Get()
    async findAll() {
      return this.contentsService.findAll();
    }
  
    @Post()
    async create() {
      try {
        return await this.contentsService.create();
      } catch (error) {
        if (error.code === 11000) {
          throw new ConflictException('Content already exists');
        }
        throw error;
      }
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      const contents = await this.contentsService.finndOne(id);
      if (!contents) throw new NotFoundException('Content does not exist!');
      return contents;
    }
  
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
      const contents = await this.contentsService.delete(id);
      if (!contents) throw new NotFoundException('Content does not exist!');
      return contents;
    }
  
    @Put(':id')
    async update(@Param('id') id: string) {
      const contents = await this.contentsService.update(id);
      if (!contents) throw new NotFoundException('Content does not exist!');
      return contents;
    }
  }
