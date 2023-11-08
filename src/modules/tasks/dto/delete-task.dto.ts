import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DeleteTaskRequestDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  id: number;
}

export class DeleteTaskResponseDto {
  @ApiProperty({ type: String })
  message: string;
}
