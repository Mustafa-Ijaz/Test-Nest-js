import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const documentDetails = new DocumentBuilder()
  .setTitle('Testing api')
  .setDescription('Testing the Nest js swagger')
  .build()
  const document = SwaggerModule.createDocument(app,documentDetails);
  SwaggerModule.setup('api',app,document);

  await app.listen(3000); 
}
bootstrap();
