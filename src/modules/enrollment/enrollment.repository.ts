import { Injectable } from "@nestjs/common";
import { dbPool } from "../../config/database";

@Injectable()
export class EnrollmentRepository{
  async findAllEnrollments(){
    return "nah sip gaskeun"
  }
}