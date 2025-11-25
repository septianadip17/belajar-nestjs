import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Dependencies,
  Body,
  Param,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './course.model';
import { UpdateCourseDto } from './course.model';

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

  @Delete(':id')
  async deleteCourse(@Param('id') id: string) {
    return await this.courseService.deleteCourse(id);
  }

  @Put(':id')
  async updateCourse(@Param('id') id: string, @Body() payload: UpdateCourseDto) {
    return await this.courseService.updateCourse(id, payload)
  }

  @Get(':id')
  async getCourseById(@Param('id') id: string){
    return await this.courseService.getCoursebyId(id)
  }
}
