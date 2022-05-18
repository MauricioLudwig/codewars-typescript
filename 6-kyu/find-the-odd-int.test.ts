import { findOdd } from './find-the-odd-int';

test('should correctly return the number that occurs an odd number of times', () => {
  const fixtures: [Array<number>, number][] = [
    [[20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5],
    [[1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1],
    [[20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5],
    [[10], 10],
    [[1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10],
    [[5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1],
  ];

  fixtures.forEach(([n1, n2]) => {
    expect(findOdd(n1)).toBe(n2);
  });
});
