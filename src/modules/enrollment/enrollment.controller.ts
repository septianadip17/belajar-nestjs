import { Controller, Dependencies, Get } from "@nestjs/common";
import { EnrollmentService } from "./enrollment.service";

@Controller('enrollments')
@Dependencies(EnrollmentService)
export class EnrollmentController {
  constructor (private enrollmentService: EnrollmentService){}


  @Get()
  async findAllEnrollments() {
    return await this.enrollmentService.findAllEnrollments()
  }

}