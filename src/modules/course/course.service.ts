import { Injectable, Dependencies } from "@nestjs/common";
import { CourseRepository } from "./course.repository";
import { CreateCourseDto } from "./course.model";

@Injectable()
@Dependencies(CourseRepository)
export class CourseService {
    constructor(private courseRepository: CourseRepository) {}

    async findAllCourses() {
        return this.courseRepository.findAllCourses();
    }

    async createCourse(payload: CreateCourseDto) {
        return this.courseRepository.createCourse(payload);
    }
}