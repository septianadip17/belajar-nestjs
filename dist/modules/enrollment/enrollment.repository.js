"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentRepository = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("../../config/database");
const date_fns_1 = require("date-fns");
let EnrollmentRepository = class EnrollmentRepository {
    async findAllEnrollments() {
        const query = `SELECT s.Name, s.SchoolName, c.CourseName, c.CourseLevel, c.CourseID, e.StudentID, e.EnrollmentDate, e.EnrollmentID, e.Status FROM Enrollment e JOIN Student s ON e.StudentID = s.StudentID 
    JOIN Course  c ON e.CourseID  = c.CourseID`;
        const [rows] = await database_1.dbPool.query(query);
        return rows.map((row) => ({
            enrollment_id: row.EnrollmentID,
            student_id: row.StudentID,
            name: row.Name,
            school_name: row.SchoolName,
            course_id: row.CourseID,
            course_name: row.CourseName,
            course_level: row.CourseLevel,
            enrollment_date: (0, date_fns_1.format)(row.EnrollmentDate, 'dd-MM-yyyy'),
            status: row.Status
        }));
    }
    async getEnrollmentById(id) {
        const query = `SELECT 
      s.StudentID, s.Name, s.SchoolName, c.CourseID, c.CourseName, c.CourseLevel, e.EnrollmentDate, e.Status
      FROM Enrollment e
      JOIN Student s ON e.StudentID = s.StudentID 
      JOIN Course c ON e.CourseID = c.CourseID 
      WHERE e.EnrollmentID = ?`;
        const [rows] = await database_1.dbPool.query(query, [id]);
        return rows.map((row) => ({
            enrollment_id: row.EnrollmentID,
            student_id: row.StudentID,
            name: row.Name,
            school_name: row.SchoolName,
            course_id: row.CourseID,
            course_name: row.CourseName,
            course_level: row.CourseLevel,
            enrollment_date: (0, date_fns_1.format)(row.EnrollmentDate, 'dd-MM-yyyy'),
            status: row.Status
        }));
    }
    async createEnrollment(payload) {
        const query = `INSERT INTO Enrollment (StudentID, CourseID, EnrollmentDate, Status) values (?, ?, ?, ?);`;
        const [result] = await database_1.dbPool.execute(query, [payload.studentId, payload.courseId, payload.enrollmentDate, payload.status]);
        return "berhasil menambahkan enrollment";
    }
    async deleteEnrollment(id) {
        const query = 'DELETE FROM Enrollment WHERE EnrollmentID = ?';
        const result = await database_1.dbPool.execute(query, [id]);
        return "sip, berhasil hapus";
    }
    async editEnrollment(id, payload) {
        const query = 'UPDATE Enrollment SET StudentID = ?, CourseID = ?, EnrollmentDate = ?, Status = ? WHERE EnrollmentID = ?';
        const result = await database_1.dbPool.execute(query, [payload.studentId, payload.courseId, payload.enrollmentDate, payload.status, id]);
        return "siap meluncur rapih dah";
    }
};
exports.EnrollmentRepository = EnrollmentRepository;
exports.EnrollmentRepository = EnrollmentRepository = __decorate([
    (0, common_1.Injectable)()
], EnrollmentRepository);
//# sourceMappingURL=enrollment.repository.js.map