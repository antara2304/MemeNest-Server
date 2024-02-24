import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class UtilService {
  base64_encode(file) {
    const bitmap = readFileSync(file);
    return Buffer.from(bitmap).toString('base64');
  }
}
