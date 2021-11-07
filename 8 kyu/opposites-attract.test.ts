import { lovefunc } from './opposites-attract';

test('should correctly determine boolean value', () => {
  const fixtures: [number, number, boolean][] = [
    [1, 4, true],
    [2, 2, false],
    [0, 1, true],
    [0, 0, false],
  ];

  fixtures.forEach(([n1, n2, r]) => {
    expect(lovefunc(n1, n2)).toEqual(r);
  });
});
