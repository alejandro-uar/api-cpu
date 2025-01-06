import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cpu } from 'src/entities/cpu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AmdService {

    constructor(
        @InjectRepository(Cpu) private readonly cpuRepository: Repository<Cpu>
    ){}

    async findCpuService(){
        const result = this.cpuRepository.find()
        return result
    }

    async createCpuService(data:Partial<Cpu>){
        const result = await this.cpuRepository.save(data)
        return result
    }
}
