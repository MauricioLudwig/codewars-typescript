import { isSortedAndHow } from './sorted-yes-no-how';

describe('test suites for sorted-yes-no-how kata', () => {
  test('should work for [1, 2]', () => {
    expect(isSortedAndHow([1, 2])).toBe('yes, ascending');
  });

  test('should work for [15, 7, 3, -8]', () => {
    expect(isSortedAndHow([15, 7, 3, -8])).toBe('yes, descending');
  });

  test('should work for [4, 2, 30]', () => {
    expect(isSortedAndHow([4, 2, 30])).toBe('no');
  });
});
