import { Dependencies, Injectable } from "@nestjs/common";
import { EnrollmentRepository } from "./enrollment.repository";

@Injectable()
@Dependencies(EnrollmentRepository)
export class EnrollmentService{
  constructor(private enrollmentRepository: EnrollmentRepository){}

  // get all enrollments
  async findAllEnrollments(){
    return await this.enrollmentRepository.findAllEnrollments()
  }
}