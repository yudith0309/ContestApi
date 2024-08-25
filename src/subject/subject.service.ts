import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject } from 'src/shemas/subject.shema'; 

@Injectable()
export class SubjectService {
    constructor(@InjectModel(Subject.name) private SubjectModel: Model<Subject>) { }
    
    async create(): Promise<Subject> {
        const createSubject = new this.SubjectModel();
        return createSubject.save();
    }
    async findAll(): Promise<Subject[]> {
        return this.SubjectModel.find().exec();
    }
    async finndOne(id: string) {
        return this.SubjectModel.findById(id);
    }
    async delete(id: string) {
        return this.SubjectModel.findByIdAndDelete(id);
    }
    async update(id: string) {
        return this.SubjectModel.findByIdAndUpdate(id, { new: true });
    }
}
