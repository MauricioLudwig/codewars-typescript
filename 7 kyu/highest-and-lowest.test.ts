import { Kata } from './highest-and-lowest';

test('test suites for highest-and-lowest kata', () => {
  const fixtures: [string, string][] = [
    ['1 2 3 4 5', '5 1'],
    ['1 2 -3 4 5', '5 -3'],
    ['1 9 3 4 -5', '9 -5'],
    ['4 5 29 54 4 0 -214 542 -64 1 -3 6 -6', '542 -214'],
  ];

  fixtures.forEach(([n1, n2]) => {
    expect(Kata.highAndLow(n1)).toEqual(n2);
  });
});
