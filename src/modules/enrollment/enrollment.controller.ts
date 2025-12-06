import { Body, Controller, Dependencies, Get, Param, Post } from "@nestjs/common";
import { EnrollmentService } from "./enrollment.service";
import { CreateEnrollmentDto } from "./enrollment.model";

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

  @Post()
  async createEnrollment(@Body() payload: CreateEnrollmentDto){
    return this.enrollmentService.createEnrollment(payload)
  }


}