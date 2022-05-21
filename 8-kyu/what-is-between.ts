export const between = (a: number, b: number): number[] => {
  const range = b - a + 1;
  return [...new Array(range)].map((_, i) => i + a);
};
