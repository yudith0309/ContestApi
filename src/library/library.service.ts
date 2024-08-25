import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Library } from 'src/shemas/library.shema'; 

@Injectable()
export class LibraryService {
    constructor(@InjectModel(Library.name) private LibraryModel: Model<Library>) { }
    
    async create(): Promise<Library> {
        const createLibrary = new this.LibraryModel();
        return createLibrary.save();
    }
    async findAll(): Promise<Library[]> {
        return this.LibraryModel.find().exec();
    }
    async finndOne(id: string) {
        return this.LibraryModel.findById(id);
    }
    async delete(id: string) {
        return this.LibraryModel.findByIdAndDelete(id);
    }
    async update(id: string) {
        return this.LibraryModel.findByIdAndUpdate(id, { new: true });
    }
}
