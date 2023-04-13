import { solution } from './string-ends-with';

const fixtures: Array<[string, string, boolean]> = [
  ['abcde', 'cde', true],
  ['abcde', 'abc', false],
  ['abc', '', true]
];

test.each(fixtures)('should, for %s and %s, return %s', (s1, s2, s3) => {
  expect(solution(s1, s2)).toBe(s3);
});
