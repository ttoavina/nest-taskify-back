/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  createParamDecorator,
  ExecutionContext,
  forwardRef,
  Get,
  Inject,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/lib/current.user';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from './user.model';
import { UserService } from './user.service';
// Endpoint: /users

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
  ) {}

  @Post('signup/')
  addUser(
    @Body() user: User,
  ) {
    console.log(user);
    
    return this.userService.addUser(user);
  }

  @Get('google/signup/')
  @UseGuards(AuthGuard('google'))
  addGoogleUser(@Req() req) {
    return req.user
  }

  @Get('findOne/:username')
  findOne(@Param('username') username: string) {
    return this.userService.findOne(username);
  }

  @UseGuards(JwtAuthGuard)
  @Get('myTask')
  getTask(@CurrentUser() user) {
    return user;
  }
}
