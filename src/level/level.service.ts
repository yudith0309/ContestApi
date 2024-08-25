import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Level } from 'src/shemas/level.shema'; 

@Injectable()
export class LevelService {
    constructor(@InjectModel(Level.name) private LevelModel: Model<Level>) { }
    
    async create(): Promise<Level> {
        const createLevel = new this.LevelModel();
        return createLevel.save();
    }
    async findAll(): Promise<Level[]> {
        return this.LevelModel.find().exec();
    }
    async finndOne(id: string) {
        return this.LevelModel.findById(id);
    }
    async delete(id: string) {
        return this.LevelModel.findByIdAndDelete(id);
    }
    async update(id: string) {
        return this.LevelModel.findByIdAndUpdate(id, { new: true });
    }
}
