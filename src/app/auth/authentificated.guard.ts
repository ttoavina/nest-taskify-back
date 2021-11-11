/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthentificatedGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ) {
    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated()
  }
}
