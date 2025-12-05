import { EnrollmentRepository } from "./enrollment.repository";
export declare class EnrollmentService {
    private enrollmentRepository;
    constructor(enrollmentRepository: EnrollmentRepository);
    findAllEnrollments(): Promise<string>;
}
