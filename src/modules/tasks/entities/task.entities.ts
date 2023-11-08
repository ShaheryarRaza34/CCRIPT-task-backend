import { ApiProperty } from '@nestjs/swagger';

export class Tasks {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  task: string;
}
