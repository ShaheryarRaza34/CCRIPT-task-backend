import { ApiProperty } from '@nestjs/swagger';

export class Tasks {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  task: string;

  @ApiProperty({ type: Boolean })
  completed: boolean;

  @ApiProperty({ type: Date })
  createdAt: Date;
}
