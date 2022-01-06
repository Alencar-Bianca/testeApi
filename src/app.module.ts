import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [MessagesModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
