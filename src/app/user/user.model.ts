/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    email: {type: String , required: true},
    username: {type: String , required: true},
    password: {type: String , required: true},
    task: {type: Array , required: false},
})

export interface User {
        email: string;
        username: string;
        password: string;
        task: [];
}