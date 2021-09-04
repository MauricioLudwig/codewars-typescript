import { getAverage } from './get-the-mean-of-an-array';

describe('test suites for get-the-mean-of-an-array kata', () => {
  test('should return the correct mean', () => {
    const fixture: [Array<number>, number][] = [
      [[2, 2, 2, 2], 2],
      [[1, 2, 3, 4, 5], 3],
      [[1, 1, 1, 1, 1, 1, 1, 2], 1],
    ];

    fixture.forEach(([n1, n2]) => {
      expect(getAverage(n1)).toEqual(n2);
    });
  });
});
