import { StudentRepository } from './../student/student.repository';
import { CourseRepository } from './../course/course.repository';
import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { EnrollmentRepository } from "./enrollment.repository";
import { CreateEnrollmentDto, EditEnrollmentDto } from "./enrollment.model";

@Injectable()
@Dependencies(EnrollmentRepository, CourseRepository, StudentRepository)
export class EnrollmentService {
  constructor(private enrollmentRepository: EnrollmentRepository, private courseRepository: CourseRepository, private studentRepository: StudentRepository) { }

  // get all enrollments
  async findAllEnrollments() {
    return await this.enrollmentRepository.findAllEnrollments()
  }

  // get an enrollment
  async getEnrollmentById(id: string) {
    return await this.enrollmentRepository.getEnrollmentById(id)
  }

  // create an enrollment
  async createEnrollment(payload: CreateEnrollmentDto) {
    const courseIdCheck = await this.courseRepository.getCourseById(payload.courseId.toString())
    const studentIdCheck = await this.studentRepository.getStudentById(payload.studentId.toString())
    if (courseIdCheck.length == 0 && studentIdCheck.length == 0) {
      throw new BadRequestException('Course ID and Student ID does not exist.');
    } else if (studentIdCheck.length == 0) {
      throw new BadRequestException('Student ID does not exist.');
    } else if (courseIdCheck.length == 0 ) {
      throw new BadRequestException('Course ID does not exist.');
    }
    return await this.enrollmentRepository.createEnrollment(payload)
  }

  // delete an enrollment
  async deleteEnrollment(id: string) {
    const enrollmentIdCheck = await this.enrollmentRepository.getEnrollmentById(id)
    if (enrollmentIdCheck.length == 0) {
      throw new BadRequestException('the enrollment does not exist')
    }
    return await this.enrollmentRepository.deleteEnrollment(id)
  }

  // edit an enrollment
  async editEnrollment(id: string, payload: EditEnrollmentDto) {
    const enrollmentIdCheck = await this.enrollmentRepository.getEnrollmentById(id)
    if (enrollmentIdCheck.length == 0) {
      throw new BadRequestException('the enrollment does not exist')
    }
    return await this.enrollmentRepository.editEnrollment(id, payload)
  }
}