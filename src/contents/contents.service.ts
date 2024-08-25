import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contents } from 'src/shemas/contents.shema';


@Injectable()
export class ContentsService {
    constructor(@InjectModel(Contents.name) private ContentsModel: Model<Contents>) { }
    
    async create(): Promise<Contents> {
        const createContents = new this.ContentsModel();
        return createContents.save();
    }
    async findAll(): Promise<Contents[]> {
        return this.ContentsModel.find().exec();
    }
    async finndOne(id: string) {
        return this.ContentsModel.findById(id);
    }
    async delete(id: string) {
        return this.ContentsModel.findByIdAndDelete(id);
    }
    async update(id: string) {
        return this.ContentsModel.findByIdAndUpdate(id, { new: true });
    }
}
