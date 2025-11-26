import { StudentRepository } from "./student.repository";
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: StudentRepository);
    findAllStudents(): Promise<{
        id: number;
        student_name: string;
        course_id: number;
        class_level: string;
        school_name: string;
        email: string;
        phone_number: string;
        birth_date: string;
    }[]>;
}
