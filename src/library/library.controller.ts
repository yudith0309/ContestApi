import {
    Controller, Get, Post, 
    Param, Put, Delete, ConflictException,
    NotFoundException, HttpCode
}
    from '@nestjs/common';

import { LibraryService } from './library.service';

@Controller('library')
export class LibraryController {
    constructor(private libraryService: LibraryService) { }

    @Get()
    async findAll() {
        return this.libraryService.findAll();
    }

    @Post()
    async create() {
        try {
            return await this.libraryService.create();
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Library already exists');
            }
            throw error;
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const library = await this.libraryService.finndOne(id);
        if (!library) throw new NotFoundException('Library does not exist!');
        return library;
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const library = await this.libraryService.delete(id);
        if (!library) throw new NotFoundException('Library does not exist!');
        return library;
    }

    @Put(':id')
    async update(@Param('id') id: string) {
        const library = await this.libraryService.update(id);
        if (!library) throw new NotFoundException('Library does not exist!');
        return library;
    }
}
