import { Course } from './course.interface';
import { CreateCourseDto, UpdateCourseDto } from './course.model';
export declare class CourseRepository {
    findAllCourses(): Promise<Course[]>;
    createCourse(payload: CreateCourseDto): Promise<void>;
    deleteCourse(id: string): Promise<void>;
    updateCourse(id: string, payload: UpdateCourseDto): Promise<void>;
}
