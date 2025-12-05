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

  // get an enrollment
  async getEnrollmentById(id: string){
    return await this.enrollmentRepository.getEnrollmentById(id)
  }

  // create an enrollment
  async createEnrollment(){
    return "sabi lah"
  }
}