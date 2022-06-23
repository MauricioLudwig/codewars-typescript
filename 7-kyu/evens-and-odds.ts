export const evensAndOdds = (n: number): string =>
  n.toString(n % 2 === 0 ? 2 : 16);
