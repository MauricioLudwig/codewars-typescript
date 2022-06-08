import { divisors } from './count-the-divisors-of-a-number';

describe('test suites for count-the-divisors-of-a-number', () => {
  test('should return 1', () => {
    expect(divisors(1)).toBe(1);
  });

  test('should return 4', () => {
    expect(divisors(10)).toBe(4);
  });

  test('should return 2', () => {
    expect(divisors(11)).toBe(2);
  });

  test('should return 8', () => {
    expect(divisors(54)).toBe(8);
  });

  test('should return 7', () => {
    expect(divisors(64)).toBe(7);
  });
});
