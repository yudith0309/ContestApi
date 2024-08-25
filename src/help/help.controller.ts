import {
    Controller, Get, Post, 
    Param, Put, Delete, ConflictException,
    NotFoundException, HttpCode
}
    from '@nestjs/common';

import { HelpService } from './help.service';

@Controller('help')
export class HelpController {
    constructor(private helpService: HelpService) { }

    @Get()
    async findAll() {
        return this.helpService.findAll();
    }

    @Post()
    async create() {
        try {
            return await this.helpService.create();
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Help already exists');
            }
            throw error;
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const help = await this.helpService.finndOne(id);
        if (!help) throw new NotFoundException('Help does not exist!');
        return help;
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const help = await this.helpService.delete(id);
        if (!help) throw new NotFoundException('Help does not exist!');
        return help;
    }

    @Put(':id')
    async update(@Param('id') id: string) {
        const help = await this.helpService.update(id);
        if (!help) throw new NotFoundException('Help does not exist!');
        return help;
    }
}
