import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

//To start our project
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Paasint to the NestFactory the root of our application
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
