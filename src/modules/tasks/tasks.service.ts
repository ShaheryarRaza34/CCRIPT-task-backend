import { Injectable, NotFoundException } from '@nestjs/common';
import { query } from 'express';
import { lutimes } from 'fs';
import { PrismaService } from '../prisma/prisma.service';
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

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateTaskRequestDto): Promise<CreateTaskResponseDto> {
    const data = await this.prisma.tasks.create({
      data: body,
      select: {
        task: true,
      },
    });
    return { message: `${data.task} created successfully` };
  }

  async findAll(query: ListTasksRequestDto): Promise<ListTasksResponseDto> {
    const data = await this.prisma.tasks.findMany({
      take: query.limit,
      skip: query.offset,
    });
    const tasks = data.map((task) => {
      return { id: task.id, task: task.task };
    });
    return { tasks };
  }

  async update(
    id: number,
    body: UpdateTaskRequestDto,
  ): Promise<UpdateTaskResponseDto> {
    const existingTask = await this.prisma.tasks.findFirst({
      where: {
        id,
      },
    });
    if (!existingTask) {
      throw new NotFoundException(`Task Not Found`);
    }
    const data = await this.prisma.tasks.update({
      where: {
        id,
      },
      data: {
        task: body.task,
      },
    });
    return { message: `${data.task} updated successfully` };
  }

  async delete(id: number): Promise<DeleteTaskResponseDto> {
    const existingTask = await this.prisma.tasks.findFirst({
      where: {
        id,
      },
    });
    if (!existingTask) {
      throw new NotFoundException(`Task Not Found`);
    }
    const data = await this.prisma.tasks.delete({
      where: {
        id,
      },
    });
    return { message: `${data.task} deleted successfully` };
  }
}
