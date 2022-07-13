import { enough } from './will-there-be-enough-space';

describe('test suites for will-there-be-enough-space kata', () => {
  test('should return 0', () => {
    expect(enough(10, 5, 5)).toBe(0);
  });

  test('should return 10', () => {
    expect(enough(100, 60, 50)).toBe(10);
  });

  test('should return 0', () => {
    expect(enough(50, 15, 10)).toBe(0);
  });
});
