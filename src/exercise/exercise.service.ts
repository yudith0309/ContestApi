import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Excercise } from 'src/shemas/exercise.shema';

@Injectable()
export class ExerciseService {
    constructor(@InjectModel(Excercise.name) private ExcerciseModel: Model<Excercise>) { }
    
    async create(): Promise<Excercise> {
        const createExcercise = new this.ExcerciseModel();
        return createExcercise.save();
    }
    async findAll(): Promise<Excercise[]> {
        return this.ExcerciseModel.find().exec();
    }
    async finndOne(id: string) {
        return this.ExcerciseModel.findById(id);
    }
    async delete(id: string) {
        return this.ExcerciseModel.findByIdAndDelete(id);
    }
    async update(id: string) {
        return this.ExcerciseModel.findByIdAndUpdate(id, { new: true });
    }
}
