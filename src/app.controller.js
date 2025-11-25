import { Controller, Dependencies, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }
  
  @Get('hello')
  sayHello() {
    return { "message": "Hello from new endpoint!" };
  }

  @Get('/')
  getHello() {
    return this.appService.getHello("Hello World!");
  }
}
