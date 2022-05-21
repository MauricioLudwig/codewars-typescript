import { between } from './what-is-between';

describe('test suites for what-is-between kata', () => {
  test('should return array of numbers for given range', () => {
    const fixtures: [number, number, Array<number>][] = [
      [1, 4, [1, 2, 3, 4]],
      [-2, 2, [-2, -1, 0, 1, 2]],
    ];

    fixtures.forEach(([n1, n2, n3]) => {
      expect(between(n1, n2)).toEqual(n3);
    });
  });
});
