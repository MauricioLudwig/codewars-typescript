import { high } from './highest-scoring-word';

describe('test suites for highest-scoring-word kata', () => {
  test('should return the highest scoring word', () => {
    const fixtures: [string, string][] = [
      ['man i need a taxi up to ubud', 'taxi'],
      ['what time are we climbing up the volcano', 'volcano'],
      ['take me to semynak', 'semynak'],
      ['massage yes massage yes massage', 'massage'],
      ['take two bintang and a dance please', 'bintang'],
      ['aa b', 'aa'],
      ['b aa', 'b'],
      ['bb d', 'bb'],
      ['d bb', 'd'],
      ['aaa b', 'aaa'],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(high(n1)).toBe(n2);
    });
  });
});
