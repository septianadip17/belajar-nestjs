import { EnrollmentRepository } from "./enrollment.repository";
import { CreateEnrollmentDto } from "./enrollment.model";
export declare class EnrollmentService {
    private enrollmentRepository;
    constructor(enrollmentRepository: EnrollmentRepository);
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
}
