import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskResponseDto } from './dto/task.dto';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Tasks') private taskModel: Model<Task>) {}

  async getTaskOf(id: string) {
    const result = await this.taskModel.find({ user: id }).exec();
    return result;
  }

  async createTask(data: Task) {
    const newTask = new this.taskModel(data);
    const result = await newTask.save();

    return result;
  }
}
