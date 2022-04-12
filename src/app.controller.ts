import { Controller, Get } from '@nestjs/common';
import { AppService, Entity } from './app.service';
import { ParsedData } from 'nest-csv-parser';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<ParsedData<Entity>> {
    const data = await this.appService.parse();
    console.log('Data', data);
    return data;
  }
}
