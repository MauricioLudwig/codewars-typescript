import { vowels } from '../@@utils/alphabet';

export const vowelIndices = (word: string): number[] =>
  word.split('').reduce((acc, curr, index) => {
    const isAVowel = vowels.includes(curr.toLowerCase());

    if (isAVowel) {
      acc.push(index + 1);
    }

    return acc;
  }, [] as Array<number>);
