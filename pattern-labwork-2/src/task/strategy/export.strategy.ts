import { Task } from "../task.interface";

export interface ExportStrategy {
    readonly FILE_NAME: string;

    export(tasks: Task[]): void;
}