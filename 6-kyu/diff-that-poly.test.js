import { diff } from './diff-that-poly';

describe('test suites for diff-that-poly kata', () => {
  test('should return an empty array', () => {
    expect(diff([])).toEqual([]);
  });

  test('should work for degree 0 polynomials', () => {
    expect(diff([1])).toEqual([]);
  });

  test('should work for degree 1 polynomials', () => {
    expect(diff([1, 0])).toEqual([1]);
  });

  test('should work for degree 2 polynomials', () => {
    expect(diff([1, 0, 0])).toEqual([2, 0]);
  });

  test('should work for degree 3 polynomials', () => {
    expect(diff([1, 1, 1, 1])).toEqual([3, 2, 1]);
  });

  test('should work for higher degree polynomials', () => {
    expect(diff([1, 1, 1, 1, 1, 1])).toEqual([5, 4, 3, 2, 1]);
  });
});
