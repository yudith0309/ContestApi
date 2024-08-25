import {
    Controller, Get, Post, Body,
    Param, Put, Delete, ConflictException,
    NotFoundException, HttpCode
}
    from '@nestjs/common';

import { EvaluatorService } from './evaluator.service';


@Controller('evaluator')
export class EvaluatorController {
    constructor(private evaluatorService: EvaluatorService) { }

    @Get()
    async findAll() {
        return this.evaluatorService.findAll();
    }

    @Post()
    async create() {
        try {
            return await this.evaluatorService.create();
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Evaluator already exists');
            }
            throw error;
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const evaluator = await this.evaluatorService.finndOne(id);
        if (!evaluator) throw new NotFoundException('Evaluator does not exist!');
        return evaluator;
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const evaluator = await this.evaluatorService.delete(id);
        if (!evaluator) throw new NotFoundException('Evaluator does not exist!');
        return evaluator;
    }

    @Put(':id')
    async update(@Param('id') id: string) {
        const evaluator = await this.evaluatorService.update(id);
        if (!evaluator) throw new NotFoundException('Evaluator does not exist!');
        return evaluator;
    }
}
