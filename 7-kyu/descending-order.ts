export const descendingOrder = (n: number): number => {
  const str = n
    .toString()
    .split('')
    .map(Number)
    .sort((a, b) => b - a)
    .join('');

  return parseInt(str, 10);
};
