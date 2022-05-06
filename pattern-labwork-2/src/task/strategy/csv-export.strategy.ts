import { appendFileSync, writeFileSync } from "fs";
import { Task } from "../task.interface";
import { ExportStrategy } from "./export.strategy";

export class CsvExportStrategy implements ExportStrategy {
    readonly FILE_NAME: string = "tasks.csv";

    export(tasks: Task[]): void {
        writeFileSync(this.FILE_NAME, "");

        tasks
            .map(task => this.convertTaskToCsv(task))
            .forEach(str => appendFileSync(this.FILE_NAME, str))
    }

    private convertTaskToCsv(task: Task): string {
        return `${task.taskId},${task.projectName},${task.taskName},${task.taskTime},${task.taskCrew}\r\n`;
    }
}