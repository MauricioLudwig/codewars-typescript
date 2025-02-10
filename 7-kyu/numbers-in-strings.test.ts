import { solve } from './numbers-in-strings';

describe('test suites for solve kata', () => {
  const fixtures: [number, string][] = [
    [695, 'gh12cdy695m1'],
    [9, '2ti9iei7qhr5'],
    [61, 'vih61w8oohj5'],
    [42, 'f7g42g16hcu5'],
    [85, 'lu1j8qbbb85']
  ];

  test.each(fixtures)('should return %s', (res, arg) => {
    expect(solve(arg)).toBe(res);
  });
});
