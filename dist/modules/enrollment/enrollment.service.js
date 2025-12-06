"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentService = void 0;
const student_repository_1 = require("./../student/student.repository");
const course_repository_1 = require("./../course/course.repository");
const common_1 = require("@nestjs/common");
const enrollment_repository_1 = require("./enrollment.repository");
let EnrollmentService = class EnrollmentService {
    constructor(enrollmentRepository, courseRepository, studentRepository) {
        this.enrollmentRepository = enrollmentRepository;
        this.courseRepository = courseRepository;
        this.studentRepository = studentRepository;
    }
    async findAllEnrollments() {
        return await this.enrollmentRepository.findAllEnrollments();
    }
    async getEnrollmentById(id) {
        return await this.enrollmentRepository.getEnrollmentById(id);
    }
    async createEnrollment(payload) {
        const courseIdCheck = await this.courseRepository.getCourseById(payload.courseId.toString());
        const studentIdCheck = await this.studentRepository.getStudentById(payload.studentId.toString());
        if (!courseIdCheck && studentIdCheck.length == 0) {
            throw new common_1.BadRequestException('Course ID and Student ID does not exist.');
        }
        else if (studentIdCheck.length == 0) {
            throw new common_1.BadRequestException('Student ID does not exist.');
        }
        else if (!courseIdCheck) {
            throw new common_1.BadRequestException('Course ID does not exist.');
        }
        return await this.enrollmentRepository.createEnrollment(payload);
    }
    async deleteEnrollment(id) {
        const row = await this.enrollmentRepository.getEnrollmentById(id);
        if (!row) {
            throw new common_1.BadRequestException('enrollment id does not exist.');
        }
        return await this.enrollmentRepository.deleteEnrollment(id);
    }
    async editEnrollment(id, payload) {
        const row = await this.enrollmentRepository.getEnrollmentById(id);
        if (!row) {
            throw new common_1.BadRequestException('enrollment id does not exist.');
        }
        return await this.enrollmentRepository.editEnrollment(id, payload);
    }
};
exports.EnrollmentService = EnrollmentService;
exports.EnrollmentService = EnrollmentService = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)(enrollment_repository_1.EnrollmentRepository, course_repository_1.CourseRepository, student_repository_1.StudentRepository),
    __metadata("design:paramtypes", [enrollment_repository_1.EnrollmentRepository, course_repository_1.CourseRepository, student_repository_1.StudentRepository])
], EnrollmentService);
//# sourceMappingURL=enrollment.service.js.map