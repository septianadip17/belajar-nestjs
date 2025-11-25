import { Controller, Get, Dependencies } from "@nestjs/common";
import { CourseService } from "./course.service.js";

@Controller('courses')
@Dependencies(CourseService)
export class CourseController {
    constructor(courseService) {
        this.courseService = courseService
    }
    
    @Get()
    async findAllCourses() {
        return await this.courseService.findAllCourses();
    }
}
