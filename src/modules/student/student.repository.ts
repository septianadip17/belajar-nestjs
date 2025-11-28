import { dbPool } from '../../config/database';
import { Injectable } from '@nestjs/common';
import { StudentRow } from './student.interface'
import { format } from 'date-fns'
import { AddStudentDto, EditStudentDto } from './student.model';

@Injectable()
export class StudentRepository {

  // get all students
  async findAllStudents() {
    let query = 'SELECT StudentID, Name, CourseID ClassLevel, SchoolName, Email, PhoneNumber, BirthDate FROM Student';
    const [rows] = await dbPool.query(query) as [StudentRow[], any];
    return rows.map((row: StudentRow) => ({
      id: row.StudentID,
      student_name: row.Name,
      course_id: row.CourseID,
      class_level: row.ClassLevel,
      school_name: row.SchoolName,
      email: row.Email,
      phone_number: row.PhoneNumber,
      birth_date: format(row.BirthDate, 'dd-MM-yyyy')
    }));
  }

  // add a student
  async addStudent(payload: AddStudentDto) {
    const query = 'INSERT INTO Student (Name, CourseID, ClassLevel, SchoolName, Email, PhoneNumber, BirthDate) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [result] = await dbPool.execute(query, [payload.studentName, payload.courseId, payload.classLevel, payload.schoolName, payload.email, payload.phoneNumber, payload.birthDate])

    return "berhasil nambah student"
  }

  // delete a student
  async deleteStudent(id: string) {
    const query = 'DELETE FROM Student WHERE StudentID = ?';
    const result = await dbPool.execute(query, [id])
    return "berhasil ngapus"
  }

  // get student by id
  async getStudentById(id: string) {
    const query = 'SELECT StudentID, Name, CourseID ClassLevel, SchoolName, Email, PhoneNumber, BirthDate From Student WHERE StudentID = ?';
    const [rows] = await dbPool.query(query, [id]) as [StudentRow[], any]
    return rows.map((row: StudentRow) => ({
      id: row.StudentID,
      student_name: row.Name,
      course_id: row.CourseID,
      class_level: row.ClassLevel,
      school_name: row.SchoolName,
      email: row.Email,
      phone_number: row.PhoneNumber,
      birth_date: format(row.BirthDate, 'dd-MM-yyyy')
    }))
  }

  // edit a student
  async editStudent(id: string, payload: EditStudentDto) {
    const query = 'UPDATE Student SET Name = ?, CourseID = ?, ClassLevel = ?, SchoolName = ?, Email = ?, PhoneNumber = ?, BirthDate = ? WHERE StudentID = ?';
    const result = await dbPool.execute(query, [payload.studentName, payload.courseId, payload.classLevel, payload.schoolName, payload.email, payload.phoneNumber, payload.birthDate, id])

  }
}