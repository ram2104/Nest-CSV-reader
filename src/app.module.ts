import { Module } from '@nestjs/common';
import { CsvModule } from 'nest-csv-parser';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CsvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
