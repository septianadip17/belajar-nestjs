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
const common_1 = require("@nestjs/common");
const enrollment_repository_1 = require("./enrollment.repository");
let EnrollmentService = class EnrollmentService {
    constructor(enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }
    async findAllEnrollments() {
        return await this.enrollmentRepository.findAllEnrollments();
    }
    async getEnrollmentById(id) {
        return await this.enrollmentRepository.getEnrollmentById(id);
    }
    async createEnrollment(payload) {
        return await this.enrollmentRepository.createEnrollment(payload);
    }
};
exports.EnrollmentService = EnrollmentService;
exports.EnrollmentService = EnrollmentService = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)(enrollment_repository_1.EnrollmentRepository),
    __metadata("design:paramtypes", [enrollment_repository_1.EnrollmentRepository])
], EnrollmentService);
//# sourceMappingURL=enrollment.service.js.map