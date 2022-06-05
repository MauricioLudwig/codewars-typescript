import { replaceDots } from './replace-all-dots';

describe('test suites for replace-all-dots', () => {
  test('should work for empty string', () => {
    expect(replaceDots('')).toBe('');
  });

  test('should work for strings with no dots', () => {
    expect(replaceDots('no dots')).toBe('no dots');
  });

  test('should work for strings with multiple dots in-between words', () => {
    expect(replaceDots('one.two.three')).toBe('one-two-three');
  });

  test('should work for strings with only dots', () => {
    expect(replaceDots('...')).toBe('---');
  });
});
