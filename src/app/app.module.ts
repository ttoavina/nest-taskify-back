import { Module } from '@nestjs/common';
import { TaskController } from './task/task.controller';
import { UserTaskController } from './task/user.task.controller';
import { UserController } from './user/student.controller';

@Module({
  imports: [],
  controllers: [UserController, TaskController, UserTaskController],
})
export class AppModule {}
