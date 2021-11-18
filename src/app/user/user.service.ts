/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async addUser(user: User) {
    const newUser = new this.userModel({
      username: user.username,
      email: user.email,
      password: user.password,
      task: []
    });
    
    const result = await newUser.save();
    return result;
  }

  async findOne(username:string): Promise<User | null>{
    const user = await this.userModel.findOne({username : username}).exec()
    return user
  }

  async findByEmail(email: string): Promise<User | null > {
    const user = await this.userModel.findOne({email : email}).exec()
    return user
  }

}
