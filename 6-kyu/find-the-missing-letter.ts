import { alphabetArr } from '../@@utils/alphabet';
import { assertIsDefined } from '../@@utils/assertions';

export const findMissingLetter = (arr: string[]): string => {
  const arrLowerCase = arr.map((o) => o.toLowerCase());
  const [firstItem] = arr;
  assertIsDefined(firstItem);
  const isUpperCase = /[A-Z]/.test(firstItem);
  const index = alphabetArr.findIndex((o) => o === arrLowerCase[0]);

  if (index === -1) {
    throw new Error('Index of alphabet letter was not found.');
  }

  for (let i = 0; i < arr.length; i++) {
    const l1 = arrLowerCase[i];
    const l2 = alphabetArr[index + i];
    assertIsDefined(l1);
    assertIsDefined(l2);
    const isCorrectSeq = l1 === l2;

    if (!isCorrectSeq) {
      return isUpperCase ? l2.toUpperCase() : l2;
    }
  }

  throw new Error();
};
