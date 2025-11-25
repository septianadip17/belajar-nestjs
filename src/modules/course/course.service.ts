import { Injectable, Dependencies } from "@nestjs/common";
import { CourseRepository } from "./course.repository";
import { CreateCourseDto, UpdateCourseDto } from "./course.model";

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

    async deleteCourse(id: string){
        return this.courseRepository.deleteCourse(id)
    }

    async updateCourse(id: string, payload: UpdateCourseDto){
        return this.courseRepository.updateCourse(id, payload)
    }
}