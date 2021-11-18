/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly authService: AuthService
  ) {
    super({
      clientID: '289814981736-qtrep41clqtnpg19jv189jtqcr8tsr1v.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email','profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ):Promise<any> {

    try {
      console.log("PROFILES");
      
      const jwt = await this.authService.validateOAuthLogin(profile.id , Provider.Google);
      console.log(profile);
      
      const user = {
        jwt , 
        username: profile.emails[0].value.split('@')[0],
        email: profile.emails[0].value
      }
      
      done(null , user)
    } catch (error) {
      done(error , false)
    }

  }
}
