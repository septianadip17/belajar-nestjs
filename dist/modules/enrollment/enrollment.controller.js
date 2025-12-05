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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentController = void 0;
const common_1 = require("@nestjs/common");
const enrollment_service_1 = require("./enrollment.service");
let EnrollmentController = class EnrollmentController {
    constructor(enrollmentService) {
        this.enrollmentService = enrollmentService;
    }
    async findAllEnrollments() {
        return await this.enrollmentService.findAllEnrollments();
    }
    async getEnrollmentById(id) {
        return await this.enrollmentService.getEnrollmentById(id);
    }
};
exports.EnrollmentController = EnrollmentController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EnrollmentController.prototype, "findAllEnrollments", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EnrollmentController.prototype, "getEnrollmentById", null);
exports.EnrollmentController = EnrollmentController = __decorate([
    (0, common_1.Controller)('enrollments'),
    (0, common_1.Dependencies)(enrollment_service_1.EnrollmentService),
    __metadata("design:paramtypes", [enrollment_service_1.EnrollmentService])
], EnrollmentController);
//# sourceMappingURL=enrollment.controller.js.map