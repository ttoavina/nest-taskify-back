/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
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
      const {name ,emails , photo} = profile;
      console.log(profile);
      
      const user = {
          email: emails[0].value,
          firstName: name.givenName,
          lastName: name.familyName,
          accessToken
      }

      done(null , user)
  }
}
