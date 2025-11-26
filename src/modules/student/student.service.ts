import { Injectable, Dependencies } from "@nestjs/common";
import { StudentRepository } from "./student.repository";

@Injectable()
@Dependencies(StudentRepository)
export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  async findAllStudents() {
    return this.studentRepository.findAllStudents();
  }

  
}