import { countBits } from './bit-counting';

describe('test suites for bit-counting kata', () => {
  test('should return 0', () => {
    expect(countBits(0)).toBe(0);
  });

  test('should return 1', () => {
    expect(countBits(4)).toBe(1);
  });

  test('should return 3', () => {
    expect(countBits(7)).toBe(3);
  });

  test('should return 2', () => {
    expect(countBits(9)).toBe(2);
  });

  test('should return 2', () => {
    expect(countBits(10)).toBe(2);
  });
});
