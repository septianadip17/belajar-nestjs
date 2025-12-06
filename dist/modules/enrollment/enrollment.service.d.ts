import { StudentRepository } from './../student/student.repository';
import { CourseRepository } from './../course/course.repository';
import { EnrollmentRepository } from "./enrollment.repository";
import { CreateEnrollmentDto, EditEnrollmentDto } from "./enrollment.model";
export declare class EnrollmentService {
    private enrollmentRepository;
    private courseRepository;
    private studentRepository;
    constructor(enrollmentRepository: EnrollmentRepository, courseRepository: CourseRepository, studentRepository: StudentRepository);
    findAllEnrollments(): Promise<{
        enrollment_id: number;
        student_id: number;
        name: string;
        school_name: string;
        course_id: number;
        course_name: string;
        course_level: string;
        enrollment_date: string;
        status: string;
    }[]>;
    getEnrollmentById(id: string): Promise<{
        enrollment_id: number;
        student_id: number;
        name: string;
        school_name: string;
        course_id: number;
        course_name: string;
        course_level: string;
        enrollment_date: string;
        status: string;
    }[]>;
    createEnrollment(payload: CreateEnrollmentDto): Promise<string>;
    deleteEnrollment(id: string): Promise<string>;
    editEnrollment(id: string, payload: EditEnrollmentDto): Promise<string>;
}
