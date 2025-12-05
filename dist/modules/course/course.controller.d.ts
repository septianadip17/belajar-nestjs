import { CourseService } from './course.service';
import { CreateCourseDto } from './course.model';
import { UpdateCourseDto } from './course.model';
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    findAllCourses(): Promise<{
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
    getCourseById(id: string): Promise<{
        id: number;
        name: string;
        level: string;
        duration_in_weeks: number;
    }[]>;
}
