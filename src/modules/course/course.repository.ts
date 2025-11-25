import { dbPool } from '../../config/database';
import { Injectable } from '@nestjs/common';
import { Course, CourseRow } from './course.interface';
import { CreateCourseDto } from './course.model';


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

  async createCourse(payload: CreateCourseDto) {
    const query = 'INSERT INTO Course (CourseName, CourseLevel, DurationWeeks) VALUES (?, ?, ?)';
    const [result] = await dbPool.execute(query, [payload.name, payload.level, payload.durationInWeeks]);
  }
}
