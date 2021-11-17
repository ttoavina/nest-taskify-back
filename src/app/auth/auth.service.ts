/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if (!user) {
      return null;
    }
    if (user.password === password) {
      return user;
    } else {
      return null;
    }
  }

  async login(user: any) {
    
    const payload = { username: user.username, sub: user._id.toHexString()};
    console.log(payload);
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  googleLogin(req) {
    if(!req.user){
      return {message: 'User not found!'}
    }else{
      return {
        message: 'Success!',
        user: req.user
      }
    }
  }
}
