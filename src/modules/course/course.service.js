import { Injectable, Dependencies } from "@nestjs/common";
import { CourseRepository } from "./course.repository";

@Injectable()
@Dependencies(CourseRepository)
export class CourseService {
    constructor(courseRepository) {
        this.courseRepository = courseRepository
    }

    async findAllCourses() {
        return this.courseRepository.findAllCourses();
    }
}