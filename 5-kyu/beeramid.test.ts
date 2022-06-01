import { beeramid } from './beeramid';

describe('test suites for beeramid kata', () => {
  test('should return 1', () => {
    expect(beeramid(9, 2)).toBe(1);
  });

  test('should return 2', () => {
    expect(beeramid(10, 2)).toBe(2);
  });

  test('should return 2', () => {
    expect(beeramid(11, 2)).toBe(2);
  });

  test('should return 3', () => {
    expect(beeramid(21, 1.5)).toBe(3);
  });

  test('should return 5', () => {
    expect(beeramid(454, 5)).toBe(5);
  });

  test('should return 6', () => {
    expect(beeramid(455, 5)).toBe(6);
  });

  test('should return 1', () => {
    expect(beeramid(4, 4)).toBe(1);
  });

  test('should return 0', () => {
    expect(beeramid(3, 4)).toBe(0);
  });

  test('should return 0', () => {
    expect(beeramid(0, 4)).toBe(0);
  });

  test('should return 0', () => {
    expect(beeramid(-1, 4)).toBe(0);
  });
});
