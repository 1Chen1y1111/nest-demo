import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Optional()
  @Inject('APP_NAME')
  private readonly yingchen: Record<string, any>;

  @Get()
  getHello(): string {
    console.log(this.yingchen);
    return this.appService.getHello();
  }
}
