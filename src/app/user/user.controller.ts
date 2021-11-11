/* eslint-disable prettier/prettier */
import { Controller, createParamDecorator, ExecutionContext, Get, Param, Req, UseGuards } from '@nestjs/common';
import { AuthentificatedGuard } from '../auth/authentificated.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SignupResponseDto } from './dto/user.dto';
import { UserService } from './user.service';
// Endpoint: /users

const CurrentUser = createParamDecorator(
  (data: string,ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest().user;
    console.log(user);
    
    if(!user){
      return null;
    }

    return data ? user[data] : user;
  }
)

@Controller('users')
export class UserController {

  constructor(private userService: UserService) {}

  @Get('signup/:user/:password')
  addUser(@Param('user') user: string, @Param('password') password: string) {
    return this.userService.addUser(user, password, []);
  }

  @Get('/findOne/:username')
  findOne(
    @Param('username') username: string,
  ) {
    return this.userService.findOne(username);
  }

  @UseGuards(JwtAuthGuard)
  @Get('myTask')
  getTask(@CurrentUser() user){
    return user;
  }
}
