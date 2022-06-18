import { assertIsDefined } from '../@@utils/assertions';

export const sumPairs = (
  numbers: number[],
  num: number
): [number, number] | undefined => {
  let pair: [number, number] | undefined = undefined;
  let indexRangeSum = Infinity;
  let maxIndex = numbers.length - 1;
  const checkedNumbers: number[] = [];

  for (let i = 0; i < maxIndex; i++) {
    const currentNum = numbers[i];
    assertIsDefined(currentNum);

    if (checkedNumbers.includes(currentNum)) {
      continue;
    } else {
      checkedNumbers.push(currentNum);
    }

    const offset = num - currentNum;
    const index = numbers.findIndex((o, io) => io > i && o === offset);

    if (index !== -1) {
      if (index - i < indexRangeSum) {
        indexRangeSum = index - i;
        pair = [currentNum, offset];
        maxIndex = index;
      }
    }

    if (indexRangeSum === 1) {
      break;
    }
  }

  return pair;
};
