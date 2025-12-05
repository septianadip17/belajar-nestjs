import { Controller, Dependencies, Get } from "@nestjs/common";

@Controller('enrollments')
// @Dependencies(EnrollmentService)
export class EnrollmentController {
  // construtor (private enrollmentService: EnrollmentService)


  @Get()
  async findAllEnrollment() {
    return "helo"
  }

}