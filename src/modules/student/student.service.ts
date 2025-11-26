import { Injectable, Dependencies } from "@nestjs/common";
import { StudentRepository } from "./student.repository";
import { AddStudentDto } from "./student.model";

@Injectable()
@Dependencies(StudentRepository)
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
}