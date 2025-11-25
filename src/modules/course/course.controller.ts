import { Controller, Get, Post, Dependencies, Body } from "@nestjs/common";
import { CourseService } from "./course.service";
import { CreateCourseDto } from "./course.model";

@Controller('courses')
@Dependencies(CourseService)
export class CourseController {
    constructor(private courseService: CourseService) {}
    
    @Get()
    async findAllCourses() {
        return await this.courseService.findAllCourses();
    }

    @Post()
    async createCourse(@Body() payload: CreateCourseDto) {
        return await this.courseService.createCourse(payload);
    }
}
