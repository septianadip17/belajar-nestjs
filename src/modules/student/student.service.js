import { Injectable, Dependencies } from "@nestjs/common";
import { StudentRepository } from "./student.repository.js";

@Injectable()
@Dependencies(StudentRepository)
export class StudentService {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async findAllStudents() {
    return this.studentRepository.findAllStudents();
  }
}