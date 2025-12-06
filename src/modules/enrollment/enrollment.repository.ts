import { Injectable } from "@nestjs/common";
import { dbPool } from "../../config/database";
import { EnrollmentRow } from "./enrollment.interface";
import { format } from 'date-fns'
import { CreateEnrollmentDto, EditEnrollmentDto } from "./enrollment.model";

@Injectable()
export class EnrollmentRepository {

  // get all enrollments
  async findAllEnrollments(){
    const query = `SELECT s.Name, s.SchoolName, c.CourseName, c.CourseLevel, c.CourseID, e.StudentID, e.EnrollmentDate, e.EnrollmentID, e.Status FROM Enrollment e JOIN Student s ON e.StudentID = s.StudentID 
    JOIN Course  c ON e.CourseID  = c.CourseID`
    const [rows] = await dbPool.query(query) as [EnrollmentRow[], any]
    return rows.map((row: EnrollmentRow) => {
      return {
        enrollment_id: row.EnrollmentID,
        student_id: row.StudentID,
        name: row.Name,
        school_name: row.SchoolName,
        course_id: row.CourseID,
        course_name: row.CourseName,
        course_level: row.CourseLevel,
        enrollment_date: format(row.EnrollmentDate, 'dd-MM-yyyy'),
        status: row.Status
      }
    })
  }

  // get an enrollment
  async getEnrollmentById(id: string) {
    const query = `SELECT 
      s.StudentID, s.Name, s.SchoolName, c.CourseID, c.CourseName, c.CourseLevel, e.EnrollmentDate, e.Status
      FROM Enrollment e
      JOIN Student s ON e.StudentID = s.StudentID 
      JOIN Course c ON e.CourseID = c.CourseID 
      WHERE e.EnrollmentID = ?`
    const [rows] = await dbPool.query(query, [id]) as [EnrollmentRow[], any]
    if (rows.length === 0) {
      return null; // or throw an error if preferred
    }

    const row = rows[0];
    return {
      enrollment_id: row.EnrollmentID,
      student_id: row.StudentID,
      name: row.Name,
      school_name: row.SchoolName,
      course_id: row.CourseID,
      course_name: row.CourseName,
      course_level: row.CourseLevel,
      enrollment_date: format(row.EnrollmentDate, 'dd-MM-yyyy'),
      status: row.Status,
      message: "It's working"
    };
  }

  // create an enrollment
  async createEnrollment(payload: CreateEnrollmentDto) {
    const query = `INSERT INTO Enrollment (StudentID, CourseID, EnrollmentDate, Status) values (?, ?, ?, ?);`
    const [result] = await dbPool.execute(query, [payload.studentId, payload.courseId, payload.enrollmentDate, payload.status])
    return "berhasil menambahkan enrollment"
  }

  // delete an enrollment
  async deleteEnrollment(id: string){
    const query = 'DELETE FROM Enrollment WHERE EnrollmentID = ?'
    const result = await dbPool.execute(query, [id])
    return "sip, berhasil hapus"
  }

  // edit an enrollment
  async editEnrollment(id: string, payload: EditEnrollmentDto){
    const query = 'UPDATE Enrollment SET StudentID = ?, CourseID = ?, EnrollmentDate = ?, Status = ? WHERE EnrollmentID = ?'
    const result = await dbPool.execute(query, [payload.studentId, payload.courseId, payload.enrollmentDate ,payload.status, id])
    return "siap meluncur rapih dah"
  }
}