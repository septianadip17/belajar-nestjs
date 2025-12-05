export declare class EnrollmentRepository {
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
}
