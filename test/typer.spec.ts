import { isNumber, isDate } from "src/typer";

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

describe("date regex", () => {
  it("yyyy-mm-dd format earliest possible date matches", async () => {
    const input = "0000-01-01";
    expect(isDate(input)).toBeTruthy();
  });

  it("yyyy-mm-dd format latest possible date matches", async () => {
    const input = "9999-12-31";
    expect(isDate(input)).toBeTruthy();
  });

  it("yyyy-mm-dd non numeric year doesn't match", async () => {
    const input = "2ab0-11-11";
    expect(isDate(input)).toBeFalsy();
  });

  it("yyyy-mm-dd non numeric month doesn't match", async () => {
    const input = "2020-1a-11";
    expect(isDate(input)).toBeFalsy();
  });

  it("yyyy-mm-dd non numeric day doesn't match", async () => {
    const input = "2020-11-1a";
    expect(isDate(input)).toBeFalsy();
  });

  it("yyyy-mm-dd overflow month by value doesn't match", async () => {
    const input = "2020-13-11";
    expect(isDate(input)).toBeFalsy();
  });

  it("yyyy-mm-dd overflow day by value doesn't match", async () => {
    const input = "2020-11-32";
    expect(isDate(input)).toBeFalsy();
  });

  it("yyyy-mm-dd overflow year by digits doesn't match", async () => {
    const input = "20202-11-11";
    expect(isDate(input)).toBeTruthy();
  });

  it("yyyy-mm-dd overflow month by digits doesn't match", async () => {
    const input = "2020-111-01";
    expect(isDate(input)).toBeFalsy();
  });

  it("yyyy-mm-dd overflow day by digits doesn't match", async () => {
    const input = "20202-11-111";
    expect(isDate(input)).toBeFalsy();
  });

  it("date time", () => {
    expect(isDate("10-01-2020 13:21:22")).toBeTruthy();
    expect(isDate("2020-10-01 13:21:22")).toBeTruthy();
    expect(isDate("2020-10-01T13:21:22")).toBeTruthy();
  });
});
