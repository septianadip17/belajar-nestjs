import { IsString, IsInt } from 'class-validator'
import { Expose } from 'class-transformer'

export class CreateEnrollmentDto {
  @IsInt()
  @Expose({ name: 'student_id' })
  studentId: number;

  @IsInt()
  @Expose({ name: 'course_id' })
  courseId: number;

  @IsString()
  @Expose({ name: 'enrollment_date' })
  enrollmentDate: string;

  @IsString()
  @Expose({ name: 'status' })
  status: string;

  constructor(studentId: number, courseId: number, enrollmentDate: string, status: string) {
    this.studentId = studentId;
    this.courseId = courseId;
    this.enrollmentDate = enrollmentDate;
    this.status = status;
  }
}