/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async addUser(username: string, password: string, task: []) {
    const newUser = new this.userModel({
      username: username,
      password: password,
      task: []
    });
    
    const result = await newUser.save();
    return result;
    
  }

  async findOne(username:string): Promise<User | null>{
    const user = await this.userModel.findOne({username : username}).exec()
    return user
  }

}
