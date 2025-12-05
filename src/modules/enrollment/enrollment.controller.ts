import { Controller, Dependencies, Get, Param } from "@nestjs/common";
import { EnrollmentService } from "./enrollment.service";

@Controller('enrollments')
@Dependencies(EnrollmentService)
export class EnrollmentController {
  constructor (private enrollmentService: EnrollmentService){}

  // get all enrollments
  @Get()
  async findAllEnrollments() {
    return await this.enrollmentService.findAllEnrollments()
  }

  // get an enrollment
  @Get(':id')
  async getEnrollmentById(@Param('id') id: string){
    return await this.enrollmentService.getEnrollmentById(id)
  }
}