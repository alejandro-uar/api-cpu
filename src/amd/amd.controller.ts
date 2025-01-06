import { Body, Controller, Get, Post } from '@nestjs/common';
import { AmdService } from './amd.service';

@Controller('amd')
export class AmdController {
  constructor(private readonly amdService: AmdService) {}

  @Get()
  async findCpu(){
    return await this.amdService.findCpuService()
  }

  @Post()
  async createCpu(@Body() data:any){
    return await this.amdService.createCpuService(data)
  }
}