import {dbPool} from '../../config/database.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentRepository {
  async findAllStudents(){
    let query = 'SELECT StudentID, Name FROM Student';
    const [rows] = await dbPool.query(query);
    // Transform the result: rename StudentID to id, Name to StudentName
    return rows.map(row => ({
      id: row.StudentID,
      student_name: row.Name,
    }));
  }

  }