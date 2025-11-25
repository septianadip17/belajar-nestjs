import {Controller, Get, Dependencies} from '@nestjs/common';
import {StudentService} from './student.service.js';

@Controller('students')
@Dependecies(StudentService)
export class UserController {
  constructor(studentService) {
    this.studentService = studentService;
  }

  @Get()
  async findAllStudents() {
    return await this.studentService.findAllStudents();
  }
}