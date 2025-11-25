import {dbPool} from '../../config/database';
import { Injectable } from '@nestjs/common';

export interface Student {
  id: number;
  name: string;
}

interface StudentRow {
  StudentID: number;
  Name: string;
}

@Injectable()
export class StudentRepository {
  async findAllStudents(){
    let query = 'SELECT StudentID, Name FROM Student';
    const [rows] = await dbPool.query(query) as [StudentRow[], any];
    return rows.map((row: StudentRow) => ({
      id: row.StudentID,
      student_name: row.Name,
    }));
  }

  }