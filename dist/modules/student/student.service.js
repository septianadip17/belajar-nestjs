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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const student_repository_1 = require("./student.repository");
const course_repository_1 = require("../course/course.repository");
let StudentService = class StudentService {
    constructor(studentRepository, courseRepository) {
        this.studentRepository = studentRepository;
        this.courseRepository = courseRepository;
    }
    async findAllStudents() {
        return this.studentRepository.findAllStudents();
    }
    async addStudent(payload) {
        const courseIdCheck = await this.courseRepository.getCourseById(payload.courseId.toString());
        console.log(courseIdCheck);
        if (courseIdCheck.length == 0) {
            throw new common_1.BadRequestException('Course ID does not exist.');
        }
        return this.studentRepository.addStudent(payload);
    }
    async deleteStudent(id) {
        const studentIdCheck = await this.studentRepository.getStudentById(id);
        console.log(studentIdCheck.length);
        if (studentIdCheck.length == 0) {
            throw new common_1.BadRequestException('studentnya ga ada');
        }
        return this.studentRepository.deleteStudent(id);
    }
    async editStudent(id, payload) {
        return this.studentRepository.editStudent(id, payload);
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)(student_repository_1.StudentRepository, course_repository_1.CourseRepository),
    __metadata("design:paramtypes", [student_repository_1.StudentRepository, course_repository_1.CourseRepository])
], StudentService);
//# sourceMappingURL=student.service.js.map