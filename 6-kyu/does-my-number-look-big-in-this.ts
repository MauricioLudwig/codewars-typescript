export const narcissistic = (value: number): boolean => {
  const base = value.toString().length;
  const sum = value
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc + Math.pow(curr, base), 0);
  return value === sum;
};
