export declare class StudentRepository {
    findAllStudents(): Promise<{
        id: number;
        student_name: string;
    }[]>;
}
