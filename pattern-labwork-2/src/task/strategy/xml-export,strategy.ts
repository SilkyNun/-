import { Task } from "../task.interface";
import { ExportStrategy } from "./export.strategy";
import { appendFileSync, writeFileSync } from "fs";
import { parse } from "js2xmlparser";

export class XmlExportStrategy implements ExportStrategy {
    readonly FILE_NAME: string = "tasks.xml";

    export(tasks: Task[]): void {
        writeFileSync(this.FILE_NAME, parse("wrapper", tasks));
    }

}