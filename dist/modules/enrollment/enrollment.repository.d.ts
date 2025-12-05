export declare class EnrollmentRepository {
    findAllEnrollments(): Promise<{
        student_id: number;
        course_id: number;
        enrollment_date: string;
        status: string;
    }[]>;
}
