export interface Student {
    id: number;
    name: string;
}
export declare class StudentRepository {
    findAllStudents(): Promise<{
        id: number;
        student_name: string;
    }[]>;
}
