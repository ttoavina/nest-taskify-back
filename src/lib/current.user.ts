/* eslint-disable prettier/prettier */
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
    (data: string,ctx: ExecutionContext) => {
      const user = ctx.switchToHttp().getRequest().user;
      console.log(user);
      
      if(!user){
        return null;
      }
  
      return data ? user[data] : user;
    }
  )