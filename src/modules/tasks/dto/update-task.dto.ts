import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateTaskRequestDto {
  @ApiProperty({ type: String })
  @IsString()
  task: string;
}

export class UpdateTaskResponseDto {
  @ApiProperty({ type: String })
  message: string;
}
