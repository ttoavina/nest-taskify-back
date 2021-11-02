import { Injectable } from '@nestjs/common';
import { tasks } from 'src/database';
import { TaskResponseDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  private tasks = tasks;
  getTaskOf(id: number): TaskResponseDto {
    return this.tasks.filter((value) => {
      if (value.id == id) {
        return value;
      }
    });
  }
}
