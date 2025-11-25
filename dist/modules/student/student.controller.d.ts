import { StudentService } from './student.service';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    findAllStudents(): Promise<{
        id: number;
        student_name: string;
    }[]>;
}
