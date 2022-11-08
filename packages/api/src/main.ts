import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Khome')
    .setDescription('The Khome Demo App API description')
    .setVersion(process.env.npm_package_version || '1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors({
    credentials: true,
    origin: [process.env.ALLOWED_HOST || ''],
  });

  await app.listen(8000);
}
bootstrap();
