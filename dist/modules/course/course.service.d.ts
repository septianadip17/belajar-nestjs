import { CourseRepository } from "./course.repository";
import { CreateCourseDto, UpdateCourseDto } from "./course.model";
export declare class CourseService {
    private courseRepository;
    constructor(courseRepository: CourseRepository);
    findAllCourses(): Promise<import("./course.interface").Course[]>;
    createCourse(payload: CreateCourseDto): Promise<void>;
    deleteCourse(id: string): Promise<void>;
    updateCourse(id: string, payload: UpdateCourseDto): Promise<void>;
    getCoursebyId(id: string): Promise<{
        id: number;
        name: string;
        level: string;
        duration_in_weeks: number;
    }>;
}
