import { Module } from '@nestjs/common';
import { CourseController } from './course.controller.js';
import { CourseService } from './course.service.js';
import { CourseRepository } from './course.repository.js';

@Module({
  controllers: [CourseController],
  providers: [CourseService, CourseRepository],
})
export class CourseModule {}
