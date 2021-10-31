/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('user/:userId/task')
export class UserTaskController {
  @Get()
  getTaskOf(
      @Param() params: {userId: any}
  ) {
    return 'All task of user number '+ params.userId;
  }
}
