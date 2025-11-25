import { dbPool } from '../../config/database';
import { Injectable } from '@nestjs/common';


export interface Course {
  id: number;
  name: string;
  level: string;
  duration_in_weeks: number;
}

interface CourseRow {
  CourseID: number;
  CourseName: string;
  CourseLevel: string;
  DurationWeeks: number;
}

@Injectable()
export class CourseRepository {
  async findAllCourses(): Promise<Course[]> {
    const query = 'SELECT CourseID, CourseName, CourseLevel, DurationWeeks FROM Course';
    const [rows] = await dbPool.query(query) as [CourseRow[], any];
    return rows.map((row: CourseRow) => ({
      id: row.CourseID,
      name: row.CourseName,
      level: row.CourseLevel,
      duration_in_weeks: row.DurationWeeks,
    }));
  }
}
