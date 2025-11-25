import { CourseService } from "./course.service";
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    findAllCourses(): Promise<import("./course.repository").Course[]>;
    createCourse(payload: any): Promise<any>;
}
