const NUMBER = /^-?\d+(\d+)*(\.\d+(e-?\d+)?)?$/;

export function isNumber(input: string): boolean {
  return NUMBER.test(input);
}
