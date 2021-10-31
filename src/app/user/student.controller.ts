/* eslint-disable prettier/prettier */
import { Controller , Get , Post, Put } from '@nestjs/common';
// Endpoint: /users

@Controller('users')
export class UserController {
    @Get()
    getUsers() {
      return "All Users";
    }

    @Get('/:userId')
    getUserById(){
        return "User by ID"
    }

    @Post()
    createStudents(){
        return "Add user"
    }

    @Put('/:userId')
    deleteUser() {
        return "Delete user"
    }
}
