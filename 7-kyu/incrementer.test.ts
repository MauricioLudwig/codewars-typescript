import { incrementer } from './incrementer';

describe('test suites for incrementer', () => {
  test('should return array with incremented values', () => {
    const fixtures: [Array<number>, Array<number>][] = [
      [
        [1, 2, 3],
        [2, 4, 6],
      ],
      [
        [4, 6, 7, 1, 3],
        [5, 8, 0, 5, 8],
      ],
      [
        [3, 6, 9, 8, 9],
        [4, 8, 2, 2, 4],
      ],
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8],
        [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2],
      ],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(incrementer(n1)).toEqual(n2);
    });
  });
});
