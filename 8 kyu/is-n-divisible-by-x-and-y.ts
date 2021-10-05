export const isDivisible = (n: number, x: number, y: number): boolean =>
  [x, y].every((o) => n % o === 0);
