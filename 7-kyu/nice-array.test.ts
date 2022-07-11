import { isNice } from './nice-array';

describe('test suites for nice-array kata', () => {
  test('should return true', () => {
    expect(isNice([2, 10, 9, 3])).toBe(true);
  });

  test('should return false', () => {
    expect(isNice([3, 4, 5, 7])).toBe(false);
  });
});
