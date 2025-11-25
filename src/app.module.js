import { Module } from '@nestjs/common';
import {StudentModule} from './modules/student/student.module.js';

@Module({
  imports: [StudentModule],
})
export class AppModule {}