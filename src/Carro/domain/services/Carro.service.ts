import { Injectable } from '@nestjs/common';

@Injectable()
export class CarroService {
  getHello(): string {
    return 'Hello World!';
  }
}
