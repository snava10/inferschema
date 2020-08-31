import { readFileSync } from "fs";
import * as inferschema from "src/index";
import { Schema } from "src/index";
import {
  airlineSchema,
  propertySchema,
  titanicSchema,
  variedTypesSchema,
} from "test/resources/testSchemas";

describe("schema test", () => {
  it("airline test csv equality", async () => {
    const file = readFileSync("test/resources/airline.csv", "utf-8");
    const schema: Schema = await inferschema.infer(file);
    expect(schema).toEqual(airlineSchema);
  });

  it("property test csv equality", async () => {
    const file = readFileSync("test/resources/property.csv", "utf-8");
    const schema: Schema = await inferschema.infer(file);
    expect(schema).toEqual(propertySchema);
  });

  it("titanic test csv equality", async () => {
    const file = readFileSync("test/resources/titanic.csv", "utf-8");
    const schema: Schema = await inferschema.infer(file);
    expect(schema).toEqual(titanicSchema);
  });

  it("titanic test csv equality", async () => {
    const file = readFileSync("test/resources/variedTypes.csv", "utf-8");
    const schema: Schema = await inferschema.infer(file);
    expect(schema).toEqual(variedTypesSchema);
  });

  it("medium size ~50MB file", async () => {
    const file = readFileSync("test/resources/pp-2018-part2.csv", "utf-8");
    const schema: Schema = await inferschema.infer(file);
    expect(schema).toBeTruthy();
    expect(schema.fields.find((x) => x.name === "price").type).toBe(
      inferschema.FieldType.NUMBER
    );
  });

  it("column with dates and numbers should be treated as a string", async () => {
    const file = readFileSync("test/resources/datesAndnumbers.csv", "utf-8");
    const schema: Schema = await inferschema.infer(file);
    expect(schema.fields[0].type).toBe(inferschema.FieldType.STRING);
  });
});
