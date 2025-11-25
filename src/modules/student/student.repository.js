import {dbPool} from '../../config/database.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  async findAllStudents(){
    const [rows] = await dbPool.query('SELECT StudentID, Name FROM Students');
    // Transform the result: rename StudentID to id, Name to StudentName
    return rows.map(row => ({
      id: row.StudentID,
      student_name: row.Name,
    }));
  }

  }