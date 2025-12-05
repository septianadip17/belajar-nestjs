import { Module } from '@nestjs/common';
import {StudentModule} from './modules/student/student.module';
import {CourseModule} from './modules/course/course.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';

@Module({
  imports: [StudentModule, CourseModule, EnrollmentModule],
})
export class AppModule {}