import { CourseRepository } from "./course.repository";
import { CreateCourseDto, UpdateCourseDto } from "./course.model";
export declare class CourseService {
    private courseRepository;
    constructor(courseRepository: CourseRepository);
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
    deleteCourse(id: string): Promise<{
        message: string;
        id: number;
        name: string;
        level: string;
    }>;
    updateCourse(id: string, payload: UpdateCourseDto): Promise<void>;
}
