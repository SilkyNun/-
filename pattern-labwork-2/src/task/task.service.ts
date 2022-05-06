import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { ExportGenerator } from './factory-method/export-generator';
import { Observable } from './observer/observable.interface';
import { Observer } from './observer/observer.interface';
import { CsvExportStrategy } from './strategy/csv-export.strategy';
import { ExportStrategy } from './strategy/export.strategy';
import { JsonExportStrategy } from './strategy/json-export.strategy';
import { XmlExportStrategy } from './strategy/xml-export,strategy';
import { Task } from './task.interface';

@Injectable()
export class TaskService implements Observable {
    private observers: Observer[] = [];
    private tasks: Task[] = [];
    private exportStrategy: ExportStrategy = new XmlExportStrategy();

    createTask(taskDto: CreateTaskDto): Task {
        const task: Task = {
            projectName: taskDto.projectName,
            taskName: taskDto.taskName,
            taskId: new Date().getTime().toString(),
            taskTime: taskDto.taskTime,
            taskCrew: taskDto.taskCrew
        };

        this.tasks.push(task);
        return task;
    }

    readById(id: string): Task {
        return this.tasks.find(t => t.taskId === id);
    }

    readAll(): Task[] {
        return this.tasks;
    }

    deleteTask(id: string): void{
        this.tasks = this.tasks.filter(t => t.taskId !== id);
    }

    exportTasks(): void {
        this.exportStrategy.export(this.tasks);
        this.notifyObservers();
    }

    
    
    public setExportStrategy(strategy: ExportStrategy): void {
        this.exportStrategy = strategy;
    }

    public changeExportStrategy(type: string): void {
        this.exportStrategy = ExportGenerator.getExportStrategy(type);
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(ob => ob === observer);
    }

    notifyObservers(): void {
        this.observers.forEach(ob => ob.execute(this.exportStrategy.FILE_NAME));
    }
    
}
