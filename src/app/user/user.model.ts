/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    username: {type: String , required: true},
    password: {type: String , required: true},
    task: {type: Array , required: false},
})

export interface User {
        username: string;
        password: string;
        task: [];
}