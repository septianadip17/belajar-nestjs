import { Injectable, Dependencies } from "@nestjs/common";
import { CourseRepository } from "./course.repository";

@Injectable()
@Dependencies(CourseRepository)
export class CourseService {
    constructor(private courseRepository: CourseRepository) {}

    async findAllCourses() {
        return this.courseRepository.findAllCourses();
    }
}