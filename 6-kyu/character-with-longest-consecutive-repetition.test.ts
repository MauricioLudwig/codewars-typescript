import { longestRepetition } from './character-with-longest-consecutive-repetition';

describe('test suites longestRepetition', () => {
  const fixture: [string, string, number][] = [
    ['aaaabb', 'a', 4],
    ['bbbaaabaaaa', 'a', 4],
    ['cbdeuuu900', 'u', 3],
    ['abbbbb', 'b', 5],
    ['aabb', 'a', 2],
    ['ba', 'b', 1],
    ['', '', 0]
  ];

  test.each(fixture)('should, for %s, return [%s, %s]', (s1, s2, s3) => {
    expect(longestRepetition(s1)).toEqual([s2, s3]);
  });
});
