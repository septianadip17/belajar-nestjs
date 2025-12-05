import { dbPool } from '../../config/database';
import { Injectable } from '@nestjs/common';
import { CourseRow } from './course.interface';
import { CreateCourseDto, UpdateCourseDto } from './course.model';


@Injectable()
export class CourseRepository {

  // get all course
  async findAllCourses() {
    const query = 'SELECT CourseID, CourseName, CourseLevel, DurationWeeks FROM Course';
    const [rows] = await dbPool.query(query) as [CourseRow[], any];
    return rows.map((row: CourseRow) => ({
      id: row.CourseID,
      name: row.CourseName,
      level: row.CourseLevel,
      duration_in_weeks: row.DurationWeeks,
    }));
  }

  // get a course
  async getCourseById(id: string) {
    const query = 'SELECT CourseID, CourseName, CourseLevel, DurationWeeks FROM Course WHERE CourseID = ?';
    const [rows] = await dbPool.query(query, [id]) as [CourseRow[], any];
    return rows.map((row: CourseRow) => ({
      id: row.CourseID,
      name: row.CourseName,
      level: row.CourseLevel,
      duration_in_weeks: row.DurationWeeks,
    }));
  }

  // create course
  async createCourse(payload: CreateCourseDto) {
    const query = 'INSERT INTO Course (CourseName, CourseLevel, DurationWeeks) VALUES (?, ?, ?)';
    const [result] = await dbPool.execute(query, [payload.name, payload.level, payload.durationInWeeks]);
  }

  // delete course
  async deleteCourse(id: string) {
    const [rows] = await dbPool.execute('SELECT * FROM Course WHERE CourseID = ?', [id]) as [CourseRow[], any];
    const course = rows[0];
    await dbPool.execute('DELETE FROM Course WHERE CourseID = ?', [id]);
    return {
      message: 'berhasil menghapus course',
      id: course.CourseID,
      name: course.CourseName,
      level: course.CourseLevel,
    };
  }


  // update course
  async updateCourse(id: string, payload: UpdateCourseDto) {
    const query = 'UPDATE Course SET CourseName = ?, CourseLevel = ?, DurationWeeks =? WHERE CourseID = ?';
    const result = await dbPool.execute(query, [payload.name, payload.level, payload.durationInWeeks, id]);
  }
}
