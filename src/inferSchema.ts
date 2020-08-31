import * as papa from "papaparse";
import { Schema, SchemaField, FieldType } from "./index";
import { isNumber, isDate } from "./typer";
import { SchemaOptions } from "./schemaOptions";

let csv: papa.ParseResult<any>;

export async function infer(
  stringCsv: string,
  schemaOptions: SchemaOptions = getDefaultSchemaOptions()
): Promise<Schema> {
  csv = papa.parse(stringCsv.trim());
  return inferSchema(csv.data);
}

function inferSchema(data: Array<Array<any>>): Schema {
  const header: Array<string> = data[0];
  const schema: Schema = {
    fields: [],
    errors: null,
  };

  for (let col = 0; col < header.length; col++) {
    const colName = header[col];
    const schemaField = {
      name: colName,
      type: FieldType.ANY,
      format: FieldType.ANY,
      missingValues: [],
    } as SchemaField;
    schema.fields.push(schemaField);
    for (let row = 1; row < data.length; row++) {
      let fieldType = inferType(data[row][col]);

      // Sanity check. If a column has dates and number it will be treated as a string.
      if (
        schemaField.type !== FieldType.ANY &&
        schemaField.type !== fieldType
      ) {
        fieldType = FieldType.STRING;
      }

      schemaField.type = fieldType;
      if (fieldType === FieldType.STRING) {
        break;
      }
    }
  }
  return schema;
}

function inferType(value: string) {
  if (isNumber(value)) {
    return FieldType.NUMBER;
  } else if (isDate(value)) {
    return FieldType.DATE;
  } else {
    return FieldType.STRING;
  }
}

function getDefaultSchemaOptions(): SchemaOptions {
  const options: SchemaOptions = {
    dateFormat: "YYYY-MM-DD",
  };
  return options;
}
