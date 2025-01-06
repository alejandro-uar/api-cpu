import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsUUID } from 'class-validator';

export class CreateCpuDto {
  

  @ApiProperty({
    description: 'Brand of the CPU',
    example: 'Intel',
  })
  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @ApiProperty({
    description: 'Model of the CPU',
    example: 'Core i7-12700K',
  })
  @IsString()
  @IsNotEmpty()
  readonly model: string;

  @ApiProperty({
    description: 'Number of cores in the CPU',
    example: 8,
  })
  @IsInt()
  @IsNotEmpty()
  readonly core: number;

  @ApiProperty({
    description: 'Cache size of the CPU',
    example: '12MB',
  })
  @IsString()
  @IsNotEmpty()
  readonly cache: string;

  @ApiProperty({
    description: 'Frequency of the CPU',
    example: '3.8GHz',
  })
  @IsString()
  @IsNotEmpty()
  readonly frecuency: string;
}
