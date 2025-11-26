"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const database_1 = require("../../config/database");
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
let StudentRepository = class StudentRepository {
    async findAllStudents() {
        let query = 'SELECT StudentID, Name, CourseID ClassLevel, SchoolName, Email, PhoneNumber, BirthDate FROM Student';
        const [rows] = await database_1.dbPool.query(query);
        return rows.map((row) => ({
            id: row.StudentID,
            student_name: row.Name,
            course_id: row.CourseID,
            class_level: row.ClassLevel,
            school_name: row.SchoolName,
            email: row.Email,
            phone_number: row.PhoneNumber,
            birth_date: (0, date_fns_1.format)(row.BirthDate, 'dd-MM-yyyy')
        }));
    }
    async addStudent(payload) {
        const query = 'INSERT INTO Student (Name, CourseID, ClassLevel, SchoolName, Email, PhoneNumber, BirthDate) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const [result] = await database_1.dbPool.execute(query, [payload.studentName, payload.courseId, payload.classLevel, payload.schoolName, payload.email, payload.phoneNumber, payload.birthDate]);
    }
    async deleteStudent(id) {
        const query = 'DELETE FROM Student WHERE StudentID = ?';
        const result = await database_1.dbPool.execute(query, [id]);
    }
};
exports.StudentRepository = StudentRepository;
exports.StudentRepository = StudentRepository = __decorate([
    (0, common_1.Injectable)()
], StudentRepository);
//# sourceMappingURL=student.repository.js.map