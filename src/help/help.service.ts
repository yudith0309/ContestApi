import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Help } from 'src/shemas/help.shema';

@Injectable()
export class HelpService {
    constructor(@InjectModel(Help.name) private HelpModel: Model<Help>) { }
    
    async create(): Promise<Help> {
        const createHelp = new this.HelpModel();
        return createHelp.save();
    }
    async findAll(): Promise<Help[]> {
        return this.HelpModel.find().exec();
    }
    async finndOne(id: string) {
        return this.HelpModel.findById(id);
    }
    async delete(id: string) {
        return this.HelpModel.findByIdAndDelete(id);
    }
    async update(id: string) {
        return this.HelpModel.findByIdAndUpdate(id, { new: true });
    }
}
