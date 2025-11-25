"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepository = void 0;
const database_1 = require("../../config/database");
const common_1 = require("@nestjs/common");
let CourseRepository = class CourseRepository {
    async findAllCourses() {
        const query = 'SELECT CourseID, CourseName, CourseLevel, DurationWeeks FROM Course';
        const [rows] = await database_1.dbPool.query(query);
        return rows.map((row) => ({
            id: row.CourseID,
            name: row.CourseName,
            level: row.CourseLevel,
            duration_in_weeks: row.DurationWeeks,
        }));
    }
    async getCourseById(id) {
        const query = 'SELECT CourseID, CourseName, CourseLevel, DurationWeeks FROM Course WHERE CourseID = ?';
        const [rows] = await database_1.dbPool.query(query, [id]);
        const row = rows[0];
        return {
            id: row.CourseID,
            name: row.CourseName,
            level: row.CourseLevel,
            duration_in_weeks: row.DurationWeeks,
        };
    }
    async createCourse(payload) {
        const query = 'INSERT INTO Course (CourseName, CourseLevel, DurationWeeks) VALUES (?, ?, ?)';
        const [result] = await database_1.dbPool.execute(query, [payload.name, payload.level, payload.durationInWeeks]);
    }
    async deleteCourse(id) {
        const query = 'DELETE FROM Course WHERE CourseID = ?';
        const [result] = await database_1.dbPool.execute(query, [id]);
    }
    async updateCourse(id, payload) {
        const query = 'UPDATE Course SET CourseName = ?, CourseLevel = ?, DurationWeeks =? WHERE CourseID = ?';
        const result = await database_1.dbPool.execute(query, [payload.name, payload.level, payload.durationInWeeks, id]);
    }
};
exports.CourseRepository = CourseRepository;
exports.CourseRepository = CourseRepository = __decorate([
    (0, common_1.Injectable)()
], CourseRepository);
//# sourceMappingURL=course.repository.js.map