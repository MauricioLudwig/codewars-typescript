export const digitize = (n: number): number[] =>
  n.toString().split('').map(Number).reverse();
