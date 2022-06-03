import { digitize } from './convert-number-to-reversed-array-of-digits';

describe('test suites for convert-number-to-reversed-array-of-digits kata', () => {
  test('should return [1, 3, 2, 5, 3]', () => {
    expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
  });

  test('should return [0]', () => {
    expect(digitize(0)).toEqual([0]);
  });
});
