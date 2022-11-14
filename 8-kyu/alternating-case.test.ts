import { toAlternativeCase } from './alternating-case';

describe('test suites for alternative-case kata', () => {
  const fixture: [string, string][] = [
    ['hello world', 'HELLO WORLD'],
    ['HELLO WORLD', 'hello world'],
    ['hello WORLD', 'HELLO world'],
    ['HeLLo WoRLD', 'hEllO wOrld'],
    ['12345', '12345'],
    ['1a2b3c4d5e', '1A2B3C4D5E'],
    ['String.prototype.toAlternatingCase', 'sTRING.PROTOTYPE.TOaLTERNATINGcASE']
  ];

  test.each(fixture)('should, for %s, return %s', (s1, s2) => {
    expect(toAlternativeCase(s1)).toBe(s2);
  });
});
