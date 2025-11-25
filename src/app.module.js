import { Module } from '@nestjs/common';
import {StudentModule} from './modules/student/student.module.js';
import {CourseModule} from './modules/course/course.module.js';

@Module({
  imports: [StudentModule, CourseModule],
})
export class AppModule {}