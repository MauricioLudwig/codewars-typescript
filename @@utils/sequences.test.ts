import { fibonacci } from './sequences';

describe('test suites for sequences', () => {
  test(`test suites for ${fibonacci.name}`, () => {
    const fixtures: [number, number[]][] = [
      [3, [0, 1, 1]],
      [6, [0, 1, 1, 2, 3, 5]],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(fibonacci(n1)).toEqual(n2);
    });
  });
});
