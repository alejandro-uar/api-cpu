import { Module } from '@nestjs/common';
import { AmdService } from './amd.service';
import { AmdController } from './amd.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cpu } from 'src/entities/cpu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cpu])],
  controllers: [AmdController],
  providers: [AmdService],
})
export class AmdModule {}
