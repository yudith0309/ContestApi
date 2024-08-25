import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from 'src/shemas/student.shema';
import { Model } from 'mongoose';
import { CreateStudent, UpdateStudent } from 'src/Dto/create-student.dto';

@Injectable()
export class StudentsService {
    constructor(@InjectModel(Student.name) private StudentModel: Model<Student>) {}

    async create(createStudentsDto: CreateStudent): Promise<Student> {
        const createStudents = new this.StudentModel(createStudentsDto);
        return createStudents.save();
    }
    async findAll(): Promise<Student[]> {
        return this.StudentModel.find().exec();
    }    
      async finndOne(id: string) {
        return this.StudentModel.findById(id);
      }
      async delete(id: string) {
        return this.StudentModel.findByIdAndDelete(id);
      }
      async update(id: string, student: UpdateStudent) {
        return this.StudentModel.findByIdAndUpdate(id,student,{ new: true });
      }
}
