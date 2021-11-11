/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, {id: user._id});
  }
  deserializeUser(payload: any, done: (err: Error, user: any) => void) {
    done(null, payload);
  }
}
