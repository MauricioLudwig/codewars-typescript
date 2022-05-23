export const partsSums = (ls: number[]): number[] => {
  const maxSum = ls.reduce((acc, curr) => acc + curr, 0);
  let partSum = 0;

  const partSums = ls.map((o) => {
    partSum += o;
    return maxSum - partSum;
  });

  partSums.unshift(maxSum);
  return partSums;
};
