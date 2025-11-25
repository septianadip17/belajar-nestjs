import {Controller, Get, Dependencies} from '@nestjs/common';
import {StudentService} from './student.service';

@Controller('students')
@Dependencies(StudentService)
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  async findAllStudents() {
    return await this.studentService.findAllStudents();
  }
}