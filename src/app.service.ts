import { Injectable } from '@nestjs/common';
import { CsvParser, ParsedData } from 'nest-csv-parser';
import * as fs from 'fs';
import * as path from 'path';

export class Entity {
  foo: string;
  bar: string;
}

@Injectable()
export class AppService {
  constructor(private readonly csvParser: CsvParser) {}

  async parse() {
    const stream = fs.createReadStream(path.join(__dirname, '..', 'some.csv'));
    const entities: ParsedData<Entity> = await this.csvParser.parse(
      stream,
      Entity,
    );

    return entities;
  }
}
