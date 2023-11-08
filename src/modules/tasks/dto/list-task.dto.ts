import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { Tasks } from '../entities/task.entities';

export class ListTasksRequestDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  limit?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  offset?: number;
}

export class ListTasksResponseDto {
  @ApiProperty({ type: [Tasks] })
  tasks: Tasks[];
}
