import { IsString, IsInt } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateCourseDto {
  @IsString()
  @Expose({ name: 'name' })
  name: string;

  @IsString()
  @Expose({ name: 'level' })
  level: string;

  @IsInt()
  @Expose({ name: 'duration_in_weeks' })
  durationInWeeks: number;

  constructor(name: string, level: string, durationInWeeks: number) {
    this.name = name;
    this.level = level;
    this.durationInWeeks = durationInWeeks;
  }
}

export class UpdateCourseDto {
  @IsString()
  @Expose({ name: 'name' })
  name: string;

  @IsString()
  @Expose({ name: 'level' })
  level: string;

  @IsInt()
  @Expose({ name: 'duration_in_weeks' })
  durationInWeeks: number;

  constructor(name: string, level: string, durationInWeeks: number) {
    this.name = name;
    this.level = level;
    this.durationInWeeks = durationInWeeks;
  }
}
