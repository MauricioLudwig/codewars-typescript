import { minSum } from './minimize-sum-of-array';

describe('test suites for minimize-sum-of-array kata', () => {
  test('should return 22', () => {
    expect(minSum([5, 4, 2, 3])).toBe(22);
  });

  test('should return 342', () => {
    expect(minSum([12, 6, 10, 26, 3, 24])).toBe(342);
  });

  test('should return 74', () => {
    expect(minSum([9, 2, 8, 7, 5, 4, 0, 6])).toBe(74);
  });
});
