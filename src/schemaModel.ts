export interface Schema {
    fields: Array<SchemaField>;
    errors: any;
}

export interface SchemaField {
    name: string;
    type: FieldType;
    format: FieldType;
    missingValues: Array<string>;
}

export enum FieldType {
    DATE = "DATE",
    NUMBER = "NUMBER",
    STRING = "STRING",
    MONTH = "MONTH",
    YEAR= "YEAR",
    ANY = "ANY"
}