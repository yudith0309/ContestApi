import {
    Controller, Get, Post, 
    Param, Put, Delete, ConflictException,
    NotFoundException, HttpCode
}
    from '@nestjs/common';

import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
    constructor(private subjectService: SubjectService) { }

    @Get()
    async findAll() {
        return this.subjectService.findAll();
    }

    @Post()
    async create() {
        try {
            return await this.subjectService.create();
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Subject already exists');
            }
            throw error;
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const subject = await this.subjectService.finndOne(id);
        if (!subject) throw new NotFoundException('Subject does not exist!');
        return subject;
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const subject = await this.subjectService.delete(id);
        if (!subject) throw new NotFoundException('Subject does not exist!');
        return subject;
    }

    @Put(':id')
    async update(@Param('id') id: string) {
        const subject = await this.subjectService.update(id);
        if (!subject) throw new NotFoundException('Subject does not exist!');
        return subject;
    }
}
