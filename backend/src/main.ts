import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = process.env.FRONTEND_ORIGIN?.split(',').map((o) =>
    o.trim(),
  ) ?? [
    'http://localhost:3002',
    'https://limpiezasliguria.cl',
    'https://www.limpiezasliguria.cl',
  ];

  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.PORT ?? 3003;
  await app.listen(port);
}

void bootstrap();
