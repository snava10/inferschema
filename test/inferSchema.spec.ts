import { readFileSync } from "fs";
import { inferSchema } from "../src/inferSchema";
import { Schema } from "../src/schemaModel";
import { airlineSchema, propertySchema, titanicSchema } from "./testResources";

describe("schema test", () => {
  it("airline test csv equality", async () => {
    const file = await readFileSync("test/airline.csv", "utf-8");
    const schema: Schema = await inferSchema(file);
    expect(schema).toEqual(airlineSchema);
  });

  it("property test csv equality", async () => {
    const file = await readFileSync("test/property.csv", "utf-8");
    const schema: Schema = await inferSchema(file);
    expect(schema).toEqual(propertySchema);
  });

  it("titanic test csv equality", async () => {
    const file = await readFileSync("test/titanic.csv", "utf-8");
    const schema: Schema = await inferSchema(file);
    expect(schema).toEqual(titanicSchema);
  });
});
