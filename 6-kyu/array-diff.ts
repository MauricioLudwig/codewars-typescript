export const arrayDiff = (a: number[], b: number[]): number[] =>
  a.filter((o) => !b.includes(o));
