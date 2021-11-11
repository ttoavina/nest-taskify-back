/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Req, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req) {
        return this.authService.login(req.user)
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    googleAuth(){
        return null;
    }


    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req){
        return this.authService.googleLogin(req)
    }

}