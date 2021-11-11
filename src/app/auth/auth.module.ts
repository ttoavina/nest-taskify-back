/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UserModule, PassportModule,JwtModule.register({
    secret: 'KILLME',
    signOptions: {expiresIn: '3600s'}
  })],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy,GoogleStrategy],
  exports: [AuthService]
})
export class AuthModule {}
