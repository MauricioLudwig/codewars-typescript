export const squareSum = (numbers: number[]): number =>
  numbers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
