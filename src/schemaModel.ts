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
    NUMBER = "NUMBER",
    STRING = "STRING",
    ANY = "ANY"
}