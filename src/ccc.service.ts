import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { DddService } from './ddd.service';

@Injectable()
export class CccService {
  constructor(
    @Inject(forwardRef(() => DddService)) private dddService: DddService,
  ) {}

  ccc(): string {
    return this.dddService.ddd() + 'ccc';
  }
}
