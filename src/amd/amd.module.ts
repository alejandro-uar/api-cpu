import { Module } from '@nestjs/common';
import { AmdService } from './amd.service';
import { AmdController } from './amd.controller';

@Module({
  controllers: [AmdController],
  providers: [AmdService],
})
export class AmdModule {}
