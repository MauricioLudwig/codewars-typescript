import { longestConsec } from './consecutive-strings';

const fixtures: Array<[string, Array<string>, number]> = [
  ['abigailtheta', ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2],
  [
    'oocccffuucccjjjkkkjyyyeehh',
    [
      'ejjjjmmtthh',
      'zxxuueeg',
      'aanlljrrrxx',
      'dqqqaaabbb',
      'oocccffuucccjjjkkkjyyyeehh'
    ],
    1
  ],
  ['ixoyx3452zzzzzzzzzzzz', ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3]
];

test.each(fixtures)(
  'should return longest consecutive string for %s',
  (n3, n1, n2) => {
    expect(longestConsec(n1, n2)).toBe(n3);
  }
);
