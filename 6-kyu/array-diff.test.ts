import { arrayDiff } from './array-diff';

describe('test suites for array-diff kata', () => {
  test('should return []', () => {
    expect(arrayDiff([], [4, 5])).toEqual([]);
  });

  test('should return [4]', () => {
    expect(arrayDiff([3, 4], [3])).toEqual([4]);
  });

  test('should return [1, 8, 2]', () => {
    expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
  });

  test('should return [3]', () => {
    expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
  });
});
