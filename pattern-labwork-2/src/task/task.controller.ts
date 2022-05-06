import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FileMover } from './observer/file-mover';
import { Task } from './task.interface';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService) {
        taskService.addObserver(new FileMover());
    }

    @Get()
    getAllTasks(): Array<Task> {
        return this.taskService.readAll();
    }

    @Get("/export")
    exportTasks(): void {
        this.taskService.exportTasks();
    }

    @Post()
    createTask(@Body() dto: CreateTaskDto): Task {
        return this.taskService.createTask(dto);
    }

    @Delete(":id")
    deleteTaskById(@Param("id") id: string): void {
        this.taskService.deleteTask(id);
    }

    @Put("/export/:type")
    export2Json(@Param("type") type: string): void {
        this.taskService.changeExportStrategy(type);
    }
}
