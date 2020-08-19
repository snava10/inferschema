// NUMBER: 1, 0, -1, 1.2, -1.2, 1e2, 1e-2
const NUMBER = /^-?\d+(\d+)*(\.\d+(e-?\d+)?)?$/;

// DATE: yyyy-mm-dd
// const DATE = /^(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;

export function isNumber(input: string): boolean {
  return NUMBER.test(input);
}

export function isDate(input: string): boolean {
  if (Date.parse(input)) {
    return true;
  }
  return false;
}
