import { CourseService } from "./course.service";
import { CreateCourseDto } from "./course.model";
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    findAllCourses(): Promise<import("./course.interface").Course[]>;
    createCourse(payload: CreateCourseDto): Promise<void>;
    deleteCourse(id: string): Promise<void>;
}
