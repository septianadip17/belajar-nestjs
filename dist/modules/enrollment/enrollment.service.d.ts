import { EnrollmentRepository } from "./enrollment.repository";
export declare class EnrollmentService {
    private enrollmentRepository;
    constructor(enrollmentRepository: EnrollmentRepository);
    findAllEnrollments(): Promise<{
        student_id: number;
        course_id: number;
        enrollment_date: string;
        status: string;
    }[]>;
}
