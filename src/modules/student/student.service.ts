import { Injectable, Dependencies, BadRequestException } from "@nestjs/common";
import { StudentRepository } from "./student.repository";
import { AddStudentDto, EditStudentDto } from "./student.model";
import { CourseRepository } from "../course/course.repository";

@Injectable()
@Dependencies(StudentRepository, CourseRepository)
export class StudentService {
  constructor(private studentRepository: StudentRepository, private courseRepository: CourseRepository) { }

  // get all students
  async findAllStudents() {
    return this.studentRepository.findAllStudents();
  }
  
  // get a student
  async getStudentById(id: string){
    return this.studentRepository.getStudentById(id)
  }

  // add a student
  async addStudent(payload: AddStudentDto) {
    // const courseIdCheck = await this.courseRepository.getCourseById(payload.courseId.toString())
    // console.log(courseIdCheck)
    // if (courseIdCheck.length == 0) {
    //   throw new BadRequestException('Course ID does not exist.');
    // }
    return this.studentRepository.addStudent(payload);
  }
  
  // edit a student
  async editStudent(id: string, payload: EditStudentDto) {
    return this.studentRepository.editStudent(id, payload)
  }
  
  // delete a student
  async deleteStudent(id: string) {
    const studentIdCheck = await this.studentRepository.getStudentById(id)
    console.log(studentIdCheck.length)
    if (studentIdCheck.length == 0){
      throw new BadRequestException('studentnya ga ada')
    }
    return this.studentRepository.deleteStudent(id)
  }
}