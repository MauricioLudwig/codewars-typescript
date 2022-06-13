import { betterThanAverage } from './how-good-are-you-really';

describe('test suites for how-good-are-you-really kata', () => {
  test('should return true', () => {
    expect(betterThanAverage([2, 3], 5)).toBe(true);
  });

  test('should return true', () => {
    expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toBe(true);
  });

  test('should return true', () => {
    expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)).toBe(
      true
    );
  });

  test('should return false', () => {
    expect(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)).toBe(false);
  });

  test('should return false', () => {
    expect(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)).toBe(false);
  });
});
