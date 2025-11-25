import { StudentRepository } from "./student.repository";
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: StudentRepository);
    findAllStudents(): Promise<{
        id: number;
        student_name: string;
    }[]>;
}
