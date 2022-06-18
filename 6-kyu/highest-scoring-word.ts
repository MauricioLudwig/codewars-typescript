import { assertIsDefined } from '../@@utils/assertions';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const high = (str: string): string => {
  const scores = str
    .split(' ')
    .map((o) => {
      const score = o
        .split('')
        .reduce((acc, curr) => acc + alphabet.indexOf(curr) + 1, 0);

      return {
        word: o,
        score
      };
    })
    .sort((a, b) => b.score - a.score);

  const [maxScore] = scores;
  assertIsDefined(maxScore);
  return maxScore.word;
};
