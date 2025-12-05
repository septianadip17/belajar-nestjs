import { Injectable, Dependencies, BadRequestException } from "@nestjs/common";
import { CourseRepository } from "./course.repository";
import { CreateCourseDto, UpdateCourseDto } from "./course.model";

@Injectable()
@Dependencies(CourseRepository)
export class CourseService {
    constructor(private courseRepository: CourseRepository) {}

    // get all courses
    async findAllCourses() {
        return this.courseRepository.findAllCourses();
    }

    // add a course
    async createCourse(payload: CreateCourseDto) {
        return this.courseRepository.createCourse(payload);
    }

    // delete a course
    async deleteCourse(id: string){
        const courseIdCheck = await this.courseRepository.getCourseById(id)
        if (courseIdCheck.length == 0){
            throw new BadRequestException('tidak ada course')
        }
        return this.courseRepository.deleteCourse(id)
    }

    // edit a course
    async updateCourse(id: string, payload: UpdateCourseDto){
        return this.courseRepository.updateCourse(id, payload)
    }

    // get a course
    async getCourseById(id: string){
        return this.courseRepository.getCourseById(id)
    }
}