import { CourseRepository } from "./course.repository";
export declare class CourseService {
    private courseRepository;
    constructor(courseRepository: CourseRepository);
    findAllCourses(): Promise<import("./course.repository").Course[]>;
}
