import { solution } from './reversed-strings';

describe('test suites for reversed-strings kata', () => {
  test('should return "dlrow"', () => {
    expect(solution('world')).toBe('dlrow');
  });

  test('should return "olleh"', () => {
    expect(solution('hello')).toBe('olleh');
  });

  test('should work for empty strings', () => {
    expect(solution('')).toBe('');
  });
  test('should work for single letter', () => {
    expect(solution('h')).toBe('h');
  });
});
