import {
    Controller, Get, Post, Body,
    Param, Put, Delete, ConflictException,
    NotFoundException,HttpCode
  }
    from '@nestjs/common';
  
  import { ChatService } from './chat.service';
  
  @Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) { }
  
    @Get()
    async findAll() {
      return this.chatService.findAll();
    }
  
    @Post()
    async create() {
      try {
        return await this.chatService.create();
      } catch (error) {
        if (error.code === 11000) {
          throw new ConflictException('Chat already exists');
        }
        throw error;
      }
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      const chat = await this.chatService.finndOne(id);
      if (!chat) throw new NotFoundException('Chat does not exist!');
      return chat;
    }
  
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
      const chat = await this.chatService.delete(id);
      if (!chat) throw new NotFoundException('Chat does not exist!');
      return chat;
    }
  
    @Put(':id')
    async update(@Param('id') id: string) {
      const chat = await this.chatService.update(id);
      if (!chat) throw new NotFoundException('Chat does not exist!');
      return chat;
    }
  }
  
