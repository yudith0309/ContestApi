import {
    Controller, Get, Post, 
    Param, Put, Delete, ConflictException,
    NotFoundException, HttpCode
}
    from '@nestjs/common';

import { LevelService } from './level.service';

@Controller('level')
export class LevelController {
    constructor(private levelService: LevelService) { }

    @Get()
    async findAll() {
        return this.levelService.findAll();
    }

    @Post()
    async create() {
        try {
            return await this.levelService.create();
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Level already exists');
            }
            throw error;
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const level = await this.levelService.finndOne(id);
        if (!level) throw new NotFoundException('Level does not exist!');
        return level;
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const level = await this.levelService.delete(id);
        if (!level) throw new NotFoundException('Level does not exist!');
        return level;
    }

    @Put(':id')
    async update(@Param('id') id: string) {
        const level = await this.levelService.update(id);
        if (!level) throw new NotFoundException('Level does not exist!');
        return level;
    }
}
