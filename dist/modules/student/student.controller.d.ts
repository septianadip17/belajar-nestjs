import { StudentService } from './student.service';
import { AddStudentDto } from './student.model';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
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
    addStudent(payload: AddStudentDto): Promise<void>;
    deleteStudent(): Promise<void>;
}
