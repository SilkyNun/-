import { appendFileSync, fstat, readFile, readFileSync, writeFileSync } from "fs";
import { Task } from "../task.interface";
import { ExportStrategy } from "./export.strategy";

export class JsonExportStrategy implements ExportStrategy {
    readonly FILE_NAME: string = "tasks.json";

    export(tasks: Task[]): void {
        writeFileSync(this.FILE_NAME, JSON.stringify(tasks));
    }

}