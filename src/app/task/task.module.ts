/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskController } from "./task.controller";
import { TaskSchema } from "./task.model";
import { TaskService } from "./task.service";

@Module({
    controllers: [TaskController],
    imports: [MongooseModule.forFeature([{name: 'Tasks', schema: TaskSchema}])],
    providers: [TaskService],
    exports: [TaskService]
})
export class TaskModule {}