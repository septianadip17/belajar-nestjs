import { Injectable } from "@nestjs/common";
import { dbPool } from "../../config/database";
import { EnrollmentRow } from "./enrollment.interface";
import {format} from 'date-fns'

@Injectable()
export class EnrollmentRepository{
  async findAllEnrollments(){
    const query = 'SELECT StudentID, CourseID, EnrollmentDate, Status FROM Enrollment'
    const [rows] = await dbPool.query(query) as [EnrollmentRow[], any]
    return rows.map((row: EnrollmentRow) => ({
      student_id: row.StudentID,
      course_id: row.CourseID,
      enrollment_date: format(row.EnrollmentDate, 'dd-MM-yyyy'),
      status: row.Status
    }))
  }
}