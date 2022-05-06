export class CreateTaskDto {
    readonly projectName: string;
    readonly taskName: string;
    readonly taskTime: number;
    readonly taskCrew: number;
}