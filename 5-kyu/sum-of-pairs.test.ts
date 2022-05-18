import { sumPairs } from './sum-of-pairs';

test('should return correct values for sumPairs', () => {
  const fixtures: Array<[number[], number, [number, number] | undefined]> = [
    [[1, 4, 8, 7, 3, 15], 8, [1, 7]],
    [[1, -2, 3, 0, -6, 1], -6, [0, -6]],
    [[20, -13, 40], -7, undefined],
    [[1, 2, 3, 4, 1, 0], 2, [1, 1]],
    [[10, 5, 2, 3, 7, 5], 10, [3, 7]],
    [[4, -2, 3, 3, 4], 8, [4, 4]],
    [[0, 2, 0], 0, [0, 0]],
    [[5, 9, 13, -3], 10, [13, -3]],
  ];

  fixtures.forEach(([n1, n2, n3]) => {
    expect(sumPairs(n1, n2)).toEqual(n3);
  });
});
