export const minSum = (arr: number[]): number => {
  arr.sort((a, b) => a - b);
  const low = arr.splice(0, arr.length / 2);
  const high = arr.reverse();
  return low.reduce((acc, curr, index) => acc + curr * high[index]!, 0);
};
