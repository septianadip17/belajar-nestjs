import { Module } from "@nestjs/common";
import {StudentController} from './student.controller';
import {StudentService} from './student.service';
import {StudentRepository} from './student.repository';
import { CourseRepository } from "../course/course.repository";

@Module({
  controllers: [StudentController],
  providers: [StudentService, StudentRepository, CourseRepository],
})
export class StudentModule {}