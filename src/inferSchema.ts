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

  const schema: Schema = {
    fields: [],
    errors: null,
  };

  const fields = csv.data[0];
  const entries = csv.data.filter((entry) => entry !== fields);

  // Initialise fields
  for (const field of fields) {
    const currentField: SchemaField = {
      name: field,
      type: FieldType.ANY,
      format: FieldType.ANY,
      missingValues: [],
    };
    schema.fields.push(currentField);
  }

  // Infer field types
  for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex++) {
    const currentField: SchemaField = schema.fields.filter(
      (field) => field.name === fields[fieldIndex]
    )[0];

    for (const entry of entries) {
      if (currentField.type === FieldType.STRING) {
        break;
      }

      const fieldValue = entry[fieldIndex];

      if (isNumber(fieldValue)) {
        currentField.type = FieldType.NUMBER;
      } else if (isDate(fieldValue)) {
        currentField.type = FieldType.DATE;
      } else {
        currentField.type = FieldType.STRING;
      }
    }
  }

  return schema;
}

function getDefaultSchemaOptions(): SchemaOptions {
  const options: SchemaOptions = {
    dateFormat: "YYYY-MM-DD",
  };
  return options;
}
