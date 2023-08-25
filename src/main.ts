import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';
import { ValidationPipe } from '@nestjs/common';



async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule);
  const {httpAdapter} = app.get(HttpAdapterHost)
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);

  

}
bootstrap();
