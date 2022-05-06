import { CsvExportStrategy } from "../strategy/csv-export.strategy";
import { ExportStrategy } from "../strategy/export.strategy";
import { JsonExportStrategy } from "../strategy/json-export.strategy";
import { XmlExportStrategy } from "../strategy/xml-export,strategy";

export class ExportGenerator {
    public static getExportStrategy(type: string): ExportStrategy {
        switch (type) {
            case "csv": return new CsvExportStrategy();
            case "json": return new JsonExportStrategy(); 
            case "xml": return new XmlExportStrategy();
            default: throw new Error("No valid type");
        }
    }
}