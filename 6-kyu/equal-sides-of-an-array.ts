export const findEvenIndex = (arr: number[]): number => {
  const validIndices: number[] = [];

  arr.forEach((_, i) => {
    const left = getLeftSide(arr, i);
    const right = getRightSide(arr, i);

    if (left === right) {
      validIndices.push(i);
    }
  });

  return validIndices.length === 0 ? -1 : Math.min(...validIndices);
};

type TFn = (arr: number[], index: number) => number;

const getLeftSide: TFn = (arr, index) => {
  if (index === 0) {
    return 0;
  }

  const _ = arr.slice(0, index);
  return getSum(_);
};

const getRightSide: TFn = (arr, index) => {
  if (index === arr.length - 1) {
    return 0;
  }

  const _ = arr.slice(index + 1, arr.length);
  return getSum(_);
};

const getSum = (numbers: number[]): number =>
  numbers.reduce((acc, curr) => acc + curr, 0);
