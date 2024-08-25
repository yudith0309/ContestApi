import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from 'src/shemas/chat.shema';

@Injectable()
export class ChatService {
    constructor(@InjectModel(Chat.name) private ChatModel: Model<Chat>) { }
    
    async create(): Promise<Chat> {
        const createChat = new this.ChatModel();
        return createChat.save();
    }
    async findAll(): Promise<Chat[]> {
        return this.ChatModel.find().exec();
    }
    async finndOne(id: string) {
        return this.ChatModel.findById(id);
    }
    async delete(id: string) {
        return this.ChatModel.findByIdAndDelete(id);
    }
    async update(id: string) {
        return this.ChatModel.findByIdAndUpdate(id, { new: true });
    }
}
