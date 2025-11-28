import { Controller, Get, Post, Dependencies, Body, Delete, Param, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { AddStudentDto, EditStudentDto } from './student.model';

@Controller('students')
@Dependencies(StudentService)
export class StudentController {
  constructor(private studentService: StudentService) { }

  // endpoint get all students
  @Get()
  async findAllStudents() {
    return await this.studentService.findAllStudents();
  }

  // endpoint get all students
  @Post()
  async addStudent(@Body() payload: AddStudentDto) {
    console.log(payload.courseId)
    return await this.studentService.addStudent(payload);
  }

  // endpoint delete a student
  @Delete(':id')
  async deleteStudent(@Param('id') id: string) {
    console.log(id)
    return await this.studentService.deleteStudent(id)
  }

  // endpoint edit a student
  @Put(':id')
  async editStudent(@Param('id') id: string, @Body() payload: EditStudentDto) {
    return await this.studentService.editStudent(id, payload)
  }

  // endpoint get a student
  @Get(':id')
  async getStudentById(@Param('id') id: string){
    return await this.studentService.getStudentById(id)
  }
}