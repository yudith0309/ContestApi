import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Evaluator } from 'src/shemas/evaluator.shema';

@Injectable()
export class EvaluatorService {
    constructor(@InjectModel(Evaluator.name) private EvaluatorModel: Model<Evaluator>) { }
    
    async create(): Promise<Evaluator> {
        const createEvaluator = new this.EvaluatorModel();
        return createEvaluator.save();
    }
    async findAll(): Promise<Evaluator[]> {
        return this.EvaluatorModel.find().exec();
    }
    async finndOne(id: string) {
        return this.EvaluatorModel.findById(id);
    }
    async delete(id: string) {
        return this.EvaluatorModel.findByIdAndDelete(id);
    }
    async update(id: string) {
        return this.EvaluatorModel.findByIdAndUpdate(id, { new: true });
    }
}
