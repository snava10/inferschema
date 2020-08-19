import { readFileSync } from "fs";
import * as inferschema from "src/index";
import { Schema } from "src/index";
import {
  airlineSchema,
  propertySchema,
  titanicSchema,
  variedTypesSchema,
} from "test/testResources";

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
    const file = readFileSync("test/variedTypes.csv", "utf-8");
    const schema: Schema = await inferschema.infer(file);
    expect(schema).toEqual(variedTypesSchema);
  });

  it("medium size ~50MB file", async () => {
    const file = readFileSync("test/resources/pp-2018-part2.csv", "utf-8");
    const schema: Schema = await inferschema.infer(file);
    expect(schema).toBeTruthy();
  });
});
