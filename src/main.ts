import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';




async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule);
  const {httpAdapter} = app.get(HttpAdapterHost)
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Ta-barato')
  .setDescription('Uma API para um forum de pessoas conversando, vendendo e trocando peças de computado entre si')
  .setVersion('1.0')
  .addTag('usuarios')
  .addTag('computador')
  .addTag('Login')
  .build();

  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };

 
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);

  

}
bootstrap();
