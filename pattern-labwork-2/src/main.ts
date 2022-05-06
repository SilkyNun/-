import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task/task.module';

async function bootstrap() {
  const app = await NestFactory.create(TaskModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
