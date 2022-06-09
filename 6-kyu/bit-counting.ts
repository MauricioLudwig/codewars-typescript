export const countBits = (n: number): number =>
  n
    .toString(2)
    .split('')
    .filter((o) => o === '1').length;
