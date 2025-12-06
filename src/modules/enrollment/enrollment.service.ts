import { Dependencies, Injectable } from "@nestjs/common";
import { EnrollmentRepository } from "./enrollment.repository";
import { CreateEnrollmentDto } from "./enrollment.model";

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
  async createEnrollment(payload: CreateEnrollmentDto){
    return await this.enrollmentRepository.createEnrollment(payload)
  }

  // delete enrollment
  async deleteEnrollment(id: string){
    return await this.enrollmentRepository.deleteEnrollment(id)
  }
}