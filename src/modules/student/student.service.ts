import { Injectable, Dependencies } from "@nestjs/common";
import { StudentRepository } from "./student.repository";
import { AddStudentDto, EditStudentDto } from "./student.model";
import { CourseRepository } from "../course/course.repository";

@Injectable()
@Dependencies(StudentRepository, CourseRepository)
export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  async findAllStudents() {
    return this.studentRepository.findAllStudents();
  }

  async addStudent(payload: AddStudentDto){
    
    return this.studentRepository.addStudent(payload);
    
  }

  async deleteStudent(id: string){
    return this.studentRepository.deleteStudent(id)
  }

  async editStudent(id: string, payload: EditStudentDto){
    return this.studentRepository.editStudent(id, payload)
  }
}