import { isNumber } from "src/typer";

describe("numeric regex", () => {
  it("positive integers match", async () => {
    const input = "15";
    expect(isNumber(input)).toBeTruthy();
  });

  it("negative integers match", async () => {
    const input = "-15";
    expect(isNumber(input)).toBeTruthy();
  });

  it("positive decimals match", async () => {
    const input = "15.15";
    expect(isNumber(input)).toBeTruthy();
  });

  it("negative decimals match", async () => {
    const input = "-15.15";
    expect(isNumber(input)).toBeTruthy();
  });

  it("positive exponents match", async () => {
    const input = "15.15e15";
    expect(isNumber(input)).toBeTruthy();
  });

  it("negative exponents match", async () => {
    const input = "15.15e-15";
    expect(isNumber(input)).toBeTruthy();
  });

  it("textual input doesn't match", async () => {
    const input = "hello";
    expect(isNumber(input)).toBeFalsy();
  });

  it("alphanumeric input doesn't match", async () => {
    const input = "1he5.1llo5";
    expect(isNumber(input)).toBeFalsy();
  });
});
