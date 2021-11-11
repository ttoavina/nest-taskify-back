import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://toavinaTaskify:superPassword@cluster0.vl4e1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
