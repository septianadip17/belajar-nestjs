import { dbPool } from '../../config/database';
import { Injectable } from '@nestjs/common';
import { Student, StudentRow } from './student.interface'
import {format} from 'date-fns'
import { AddStudentDto } from './student.model';

@Injectable()
export class StudentRepository {
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

  async addStudent(payload: AddStudentDto){
    const query = 'INSERT INTO Student (Name, CourseID, ClassLevel, SchoolName, Email, PhoneNumber, BirthDate) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [result] = await dbPool.execute(query, [payload.studentName, payload.courseId, payload.classLevel, payload.schoolName, payload.email, payload.phoneNumber, payload.birthDate])
  }

  async deleteStudent(){
    
  }
}