export interface Course {
    id: number;
    name: string;
    level: string;
    duration_in_weeks: number;
}
export declare class CourseRepository {
    findAllCourses(): Promise<Course[]>;
}
