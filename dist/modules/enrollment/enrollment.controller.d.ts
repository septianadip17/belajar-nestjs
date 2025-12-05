import { EnrollmentService } from "./enrollment.service";
export declare class EnrollmentController {
    private enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    findAllEnrollments(): Promise<string>;
}
