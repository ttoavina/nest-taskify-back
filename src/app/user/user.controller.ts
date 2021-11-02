/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { SignupResponseDto } from './dto/user.dto';
import { UserServices } from './user.service';
// Endpoint: /users

@Controller('users')
export class UserController {
  constructor(private userSrvice: UserServices) {}

  @Get('signup/:user/:password')
  addUser(@Param('user') user: string, @Param('password') password: string) {
    return this.userSrvice.addUser(user, password, []);
  }
}
