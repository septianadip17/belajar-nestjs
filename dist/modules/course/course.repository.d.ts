import { CreateCourseDto, UpdateCourseDto } from './course.model';
export declare class CourseRepository {
    findAllCourses(): Promise<{
        id: number;
        name: string;
        level: string;
        duration_in_weeks: number;
    }[]>;
    getCourseById(id: string): Promise<{
        id: number;
        name: string;
        level: string;
        duration_in_weeks: number;
    }[]>;
    createCourse(payload: CreateCourseDto): Promise<void>;
    deleteCourse(id: string): Promise<void>;
    updateCourse(id: string, payload: UpdateCourseDto): Promise<void>;
}
