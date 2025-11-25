import { Controller, Get, Post, Dependencies, Body } from "@nestjs/common";
import { CourseService } from "./course.service";

@Controller('courses')
@Dependencies(CourseService)
export class CourseController {
    constructor(private courseService: CourseService) {}
    
    @Get()
    async findAllCourses() {
        return await this.courseService.findAllCourses();
    }

    @Post()
    async createCourse(@Body() payload: any) {
        console.log(payload);
        return payload;
    }
}
