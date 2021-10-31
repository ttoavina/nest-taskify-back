import { Body, Controller, Get, Patch, Post, Put } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto, TaskResponseDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
  @Get()
  getTaskOf(): TaskResponseDto[] {
    return ['Task of user'];
  }

  @Post()
  // eslint-disable-next-line prettier/prettier
  createTask(
      @Body() body:CreateTaskDto
  ) {
    console.log(body);
    return `Hello ${body.name} with function ${body.description}`;
  }

  @Put()
  updateTaskOf(@Body() body: UpdateTaskDto) {
    return 'Remove task of';
  }

  @Patch()
  updateTask() {
    return 'Update task';
  }
}
