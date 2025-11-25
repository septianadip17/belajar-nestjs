import { dbPool } from '../../config/database.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseRepository {
  async findAllCourses() {
    const query = 'SELECT CourseID, CourseName, CourseLevel, DurationWeeks FROM Course';
    const [rows] = await dbPool.query(query);
    return rows.map((row) => ({
      id: row.CourseID,
      name: row.CourseName,
      level: row.CourseLevel,
      duration_in_weeks: row.DurationWeeks,
    }));
  }
}
