/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { sign } from 'jsonwebtoken';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

export enum Provider {
  Google = 'google',
}

@Injectable()
export class AuthService {

  private readonly JWT_SECRET_KEY = 'KILLME';

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    console.log(user);
    
    if (!user) {
      return {status: 404};
    }
    if (user.password === password) {
      return {status: 200 , payload: await this.login(user)};
    } else {
      return {status: 401};
    }
  }

  async login(user: any) {
        
    const payload = { email: user.email, sub: user._id.toHexString()};
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async googleLogin(req) {
    if(!req.user){
      return {message: 'User not found!'}
    }else{
      const user = await this.userService.findByEmail(req.user.email);
      console.log(req.user.email);
      if (!user) {
        const u = {
          email: req.user.email , 
          username: req.user.username
        } as User
        this.userService.addUser(u)
      }
      
      return {
        message: 'Success!',
        payload: req.user
      }
    }
  }

  async validateOAuthLogin(thirdPartyId: string, provider: Provider): Promise<string>{
    try {
      const payload = {
        thirdPartyId , 
        provider
      }
       const jwt: string = sign(payload , this.JWT_SECRET_KEY , {expiresIn: 3600});
       return jwt;
    } catch (error) {
      throw new InternalServerErrorException('validateOAuthLogin' , error.message)
    }
  }
}
