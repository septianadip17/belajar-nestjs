import { EnrollmentService } from "./enrollment.service";
export declare class EnrollmentController {
    private enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    findAllEnrollments(): Promise<{
        student_id: number;
        course_id: number;
        enrollment_date: string;
        status: string;
    }[]>;
}
