import { APP_FILTER } from '@nestjs/core';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTaskRequestDto {
  @ApiProperty({
    type: String,
    description: 'Task to add',
    example: 'Meeting at 3:30',
  })
  @IsString()
  task: string;
}

export class CreateTaskResponseDto {
  @ApiProperty()
  message: string;
}
