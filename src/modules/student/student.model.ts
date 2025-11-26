import { IsString, IsInt, IsEmail, IsPhoneNumber } from 'class-validator';
import { Expose } from 'class-transformer';

export class AddStudentDto {
  @IsString()
  @Expose({ name: 'student_name' })
  studentName: string;

  @IsInt()
  @Expose({ name: 'course_id' })
  courseId: number;

  @IsString()
  @Expose({ name: 'class_level' })
  classLevel: string;

  @IsString()
  @Expose({ name: 'school_name' })
  schoolName: string;

  @IsEmail()
  @Expose({ name: 'email' })
  email: string;

  @IsPhoneNumber()
  @Expose({ name: 'phone_number' })
  phoneNumber: string;

  @IsString()
  @Expose({ name: 'birth_date' })
  birthDate: string

  constructor(studentName: string, courseId: number, classLevel: string, schoolName: string, email: string, phoneNumber: string, birthDate: string ){
    this.studentName = studentName;
    this.courseId = courseId;
    this.classLevel = classLevel;
    this.schoolName = schoolName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthDate = birthDate;
  }

}
