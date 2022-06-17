export const stairsIn20 = (stairs: number[][]): number =>
  ([] as number[]).concat
    .apply([], stairs)
    .reduce((acc, curr) => acc + curr, 0) * 20;
