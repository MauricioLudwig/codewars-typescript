import { assertIsDefined } from '../@@utils/assertions';

export const minSum = (arr: number[]): number => {
  arr.sort((a, b) => a - b);
  const low = arr.splice(0, arr.length / 2);
  const high = arr.reverse();
  return low.reduce((acc, curr, index) => {
    const el = high[index];
    assertIsDefined(el);
    return acc + curr * el;
  }, 0);
};
