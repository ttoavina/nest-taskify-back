/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { userInfo } from 'os';
import { CurrentUser } from 'src/lib/current.user';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TaskResponseDto } from './dto/task.dto';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  getTaskOf(@CurrentUser() user) {
    console.log(user);
    return this.taskService.getTaskOf(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('new')
  createTask(
    @Body() body: Task,
    @CurrentUser() user: any,
  ) {
    console.log('BODY');
    console.log(user);
    
    const task = body;
    task.user = user.id;
    return this.taskService.createTask(task)
  }
}
