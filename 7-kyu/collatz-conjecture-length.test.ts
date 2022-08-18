import { collatz } from './collatz-conjecture-length';

describe('test suites for collatz-conjecture-length kata', () => {
  test('should return 8', () => {
    expect(collatz(20)).toBe(8);
  });

  test('should return 18', () => {
    expect(collatz(15)).toBe(18);
  });
});
