import { AddStudentDto, EditStudentDto } from './student.model';
export declare class StudentRepository {
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
    addStudent(payload: AddStudentDto): Promise<string>;
    deleteStudent(id: string): Promise<string>;
    getStudentById(id: string): Promise<{
        id: number;
    }[]>;
    editStudent(id: string, payload: EditStudentDto): Promise<void>;
}
