import { isDivisible } from './is-n-divisible-by-x-and-y';

test('should correctly return the right boolean for the given input', () => {
  const fixtures: [number, number, number, boolean][] = [
    [3, 3, 4, false],
    [12, 3, 4, true],
    [8, 3, 4, false],
    [48, 3, 4, true],
  ];

  fixtures.forEach(([n1, n2, n3, res]) => {
    expect(isDivisible(n1, n2, n3)).toEqual(res);
  });
});
