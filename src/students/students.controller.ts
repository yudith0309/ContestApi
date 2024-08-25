import {
  Controller, Get, Post, Body,
  Param, Put, Delete, ConflictException,
  NotFoundException,HttpCode
}
  from '@nestjs/common';

import { StudentsService } from './students.service';
import { CreateStudent, UpdateStudent } from 'src/Dto/create-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) { }

  @Get()
  async findAll() {
    return this.studentsService.findAll();
  }

  @Post()
  async create(@Body() body: CreateStudent) {
    try {
      return await this.studentsService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Student already exists');
      }
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const student = await this.studentsService.finndOne(id);
    if (!student) throw new NotFoundException('Student does not exist!');
    return student;
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const student = await this.studentsService.delete(id);
    if (!student) throw new NotFoundException('Student does not exist!');
    return student;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateStudent) {
    const student = await this.studentsService.update(id, body);
    if (!student) throw new NotFoundException('Student does not exist!');
    return student;
  }
}
