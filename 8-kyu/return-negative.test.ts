import { makeNegative } from './return-negative';

describe('test suites for makeNegative', () => {
  test('should return -42', () => {
    expect(makeNegative(42)).toBe(-42);
  });
});
