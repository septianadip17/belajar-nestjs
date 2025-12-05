import { Dependencies, Injectable } from "@nestjs/common";

@Injectable()
// @Dependencies(EnrollmentRepository)
export class EnrollmentService{
  // constructor(private enrollmentRepository: EnrollmentRepository){}

  // get all enrollments
  async findAllEnrollments(){
    return "pasingan dari service coy"
  }
}