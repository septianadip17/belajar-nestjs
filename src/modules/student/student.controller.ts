import {Controller, Get, Post, Dependencies, Body, Delete, Param} from '@nestjs/common';
import {StudentService} from './student.service';
import { AddStudentDto } from './student.model';

@Controller('students')
@Dependencies(StudentService)
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  async findAllStudents() {
    return await this.studentService.findAllStudents();
  }

  @Post()
  async addStudent(@Body() payload: AddStudentDto){
    return await this.studentService.addStudent(payload);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string){
    return await this.studentService.deleteStudent(id)
  }

  
}