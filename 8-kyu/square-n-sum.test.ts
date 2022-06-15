import { squareSum } from './square-n-sum';

describe('test suites for square-n-sum kata', () => {
  test('should return 5', () => {
    expect(squareSum([1, 2])).toBe(5);
  });

  test('should return 50', () => {
    expect(squareSum([0, 3, 4, 5])).toBe(50);
  });

  test('should return 0', () => {
    expect(squareSum([])).toBe(0);
  });
});
