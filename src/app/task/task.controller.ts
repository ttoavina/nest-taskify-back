import { Controller, Get, Param } from '@nestjs/common';
import { TaskResponseDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('/:userId')
  getTaskOf(@Param() params: { userId: number }): TaskResponseDto {
    return this.taskService.getTaskOf(params.userId);
  }
}
