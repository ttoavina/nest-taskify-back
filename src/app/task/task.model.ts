/* eslint-disable prettier/prettier */
import * as mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
    user: {type: String , required: true},
    beginDate: {type: Date , required: true},
    endDate: {type: Date , required: true},
    taskType: {type: String , required: true},
    desctiption: {type: String}
})

export interface Task{
    user: string,
    beginDate: Date,
    endDate: Date,
    taskType: string,
    description: string
}