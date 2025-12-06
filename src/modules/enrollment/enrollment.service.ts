import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { EnrollmentRepository } from "./enrollment.repository";
import { CreateEnrollmentDto, EditEnrollmentDto } from "./enrollment.model";

@Injectable()
@Dependencies(EnrollmentRepository)
export class EnrollmentService {
  constructor(private enrollmentRepository: EnrollmentRepository) { }

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