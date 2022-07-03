import { assertIsDefined } from '../@@utils/assertions';

export const orderWeight = (str: string): string => {
  if (str === '') {
    return '';
  }

  const weights = str.split(' ').map((o) => {
    const [, match] = o.match(/(\d+)/) ?? [];
    assertIsDefined(match);
    return match;
  });

  const weightRecords = weights
    .map((o) => {
      const sum = o
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
      return {
        weight: o,
        sum
      };
    })
    .sort((a, b) => a.sum - b.sum || a.weight.localeCompare(b.weight));

  return weightRecords.map((o) => o.weight).join(' ');
};
