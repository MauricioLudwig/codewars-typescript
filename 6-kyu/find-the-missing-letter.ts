import { alphabetArr } from '../@@utils/alphabet';

export const findMissingLetter = (arr: string[]): string => {
  const arrLowerCase = arr.map((o) => o.toLowerCase());
  const isUpperCase = /[A-Z]/.test(arr[0]!);
  let index = alphabetArr.findIndex((o) => o === arrLowerCase[0]);

  if (index === -1) {
    throw new Error('Index of alphabet letter was not found.');
  }

  for (let i = 0; i < arr.length; i++) {
    const l1 = arrLowerCase[i]!;
    const l2 = alphabetArr[index + i]!;
    const isCorrectSeq = l1 === l2;

    if (!isCorrectSeq) {
      return isUpperCase ? l2.toUpperCase() : l2;
    }
  }

  throw new Error();
};
