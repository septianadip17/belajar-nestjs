import { CourseRepository } from "./course.repository";
import { CreateCourseDto } from "./course.model";
export declare class CourseService {
    private courseRepository;
    constructor(courseRepository: CourseRepository);
    findAllCourses(): Promise<import("./course.interface").Course[]>;
    createCourse(payload: CreateCourseDto): Promise<void>;
}
