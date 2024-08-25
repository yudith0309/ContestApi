import {
    Controller, Get, Post, Body,
    Param, Put, Delete, ConflictException,
    NotFoundException, HttpCode
}
    from '@nestjs/common';

import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
    constructor(private exerciseService: ExerciseService) { }

    @Get()
    async findAll() {
        return this.exerciseService.findAll();
    }

    @Post()
    async create() {
        try {
            return await this.exerciseService.create();
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Exercise already exists');
            }
            throw error;
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const excercise = await this.exerciseService.finndOne(id);
        if (!excercise) throw new NotFoundException('Exercise does not exist!');
        return excercise;
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const excercise = await this.exerciseService.delete(id);
        if (!excercise) throw new NotFoundException('Exercise does not exist!');
        return excercise;
    }

    @Put(':id')
    async update(@Param('id') id: string) {
        const excercise = await this.exerciseService.update(id);
        if (!excercise) throw new NotFoundException('Exercise does not exist!');
        return excercise;
    }
}
