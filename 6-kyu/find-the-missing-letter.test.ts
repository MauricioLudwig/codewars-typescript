import { findMissingLetter } from './find-the-missing-letter';

describe('test suites for find-the-missing-letter kata', () => {
  test('should return "e"', () => {
    expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e');
  });

  test('should return "P"', () => {
    expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P');
  });
});
