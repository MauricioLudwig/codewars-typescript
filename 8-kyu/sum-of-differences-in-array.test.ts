import { sumOfDifferences } from './sum-of-differences-in-array';

describe('test suites for sum-of-differences-in-array kata', () => {
  test('should return 9', () => {
    expect(sumOfDifferences([1, 2, 10])).toBe(9);
  });

  test('should return 2', () => {
    expect(sumOfDifferences([-3, -2, -1])).toBe(2);
  });
});
