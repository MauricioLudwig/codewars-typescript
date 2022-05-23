import { fish } from './plenty-of-fish-in-the-pond';

describe('test suites for plenty of fish kata', () => {
  test('should return 1', () => {
    expect(fish('')).toBe(1);
  });

  test('should return 1', () => {
    expect(fish('0')).toBe(1);
  });

  test('should return 1', () => {
    expect(fish('6')).toBe(1);
  });

  test('should return 2', () => {
    expect(fish('1111')).toBe(2);
  });

  test('should return 3', () => {
    expect(fish('11112222')).toBe(3);
  });

  test('should return 4', () => {
    expect(fish('111122223333')).toBe(4);
  });

  test('should return 3', () => {
    expect(fish('111111111111')).toBe(3);
  });

  test('should return 5', () => {
    expect(fish('111111111111111111112222222222')).toBe(5);
  });

  test('should return 5', () => {
    expect(fish('151128241212192113722321331')).toBe(5);
  });
});
