import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateTaskRequestDto,
  CreateTaskResponseDto,
} from './dto/create-task-dto';
import {
  DeleteTaskRequestDto,
  DeleteTaskResponseDto,
} from './dto/delete-task.dto';
import { ListTasksRequestDto, ListTasksResponseDto } from './dto/list-task.dto';
import {
  UpdateTaskRequestDto,
  UpdateTaskResponseDto,
} from './dto/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
@ApiTags('Tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post()
  @ApiCreatedResponse({ type: CreateTaskResponseDto })
  create(@Body() body: CreateTaskRequestDto): Promise<CreateTaskResponseDto> {
    return this.taskService.create(body);
  }

  @Get()
  @ApiOkResponse({ type: ListTasksResponseDto })
  findAll(@Query() query: ListTasksRequestDto): Promise<ListTasksResponseDto> {
    return this.taskService.findAll(query);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: UpdateTaskResponseDto })
  update(@Param('id') id: string, @Body() body: UpdateTaskRequestDto) {
    return this.taskService.update(parseInt(id), body);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteTaskResponseDto })
  delete(@Param('id') id: string) {
    return this.taskService.delete(parseInt(id));
  }
}
