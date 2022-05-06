import { renameSync } from "fs";
import { Observer } from "./observer.interface";

export class FileMover implements Observer {
    execute(filename: string): void {
        renameSync(filename, `C:\\Users\\denis\\Desktop\\${filename}`);
    }

}