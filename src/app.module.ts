import { Module } from '@nestjs/common';
import { AmdModule } from './amd/amd.module';

@Module({
  imports: [AmdModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
