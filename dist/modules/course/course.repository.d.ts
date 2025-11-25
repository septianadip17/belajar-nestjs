import { Course } from './course.interface';
import { CreateCourseDto } from './course.model';
export declare class CourseRepository {
    findAllCourses(): Promise<Course[]>;
    createCourse(payload: CreateCourseDto): Promise<void>;
}
