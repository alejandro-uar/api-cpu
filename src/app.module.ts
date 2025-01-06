import { Module } from '@nestjs/common';
import { AmdModule } from './amd/amd.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory: (configService: ConfigService)=>({
        ...configService.get('typeorm'),
      }),
    }),
    AmdModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
