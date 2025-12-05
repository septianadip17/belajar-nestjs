import { EnrollmentRepository } from "./enrollment.repository";
import { CreateEnrollmentDto } from "./enrollment.model";
export declare class EnrollmentService {
    private enrollmentRepository;
    constructor(enrollmentRepository: EnrollmentRepository);
    findAllEnrollments(): Promise<{
        enrollment_id: number;
        student_id: number;
        course_id: number;
        name: string;
        school_name: string;
        course_name: string;
        course_level: string;
        enrollment_date: string;
        status: string;
    }[]>;
    getEnrollmentById(id: string): Promise<{
        enrollment_id: number;
        student_id: number;
        course_id: number;
        name: string;
        school_name: string;
        course_name: string;
        course_level: string;
        enrollment_date: string;
        status: string;
    }[]>;
    createEnrollment(payload: CreateEnrollmentDto): Promise<import("mysql2").QueryResult>;
}
