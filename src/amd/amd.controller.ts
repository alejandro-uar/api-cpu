import { Controller, Get } from '@nestjs/common';
import { AmdService } from './amd.service';

@Controller('amd')
export class AmdController {
  constructor(private readonly amdService: AmdService) {}
}