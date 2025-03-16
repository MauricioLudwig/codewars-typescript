export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.some((o) => o === x);
};
