import { Module } from "@nestjs/common";
import {StudentController} from './student.controler.js';
import {StudentService} from './student.service.js';
import {StudentRepository} from './student.repository.js';

@Module({
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {}