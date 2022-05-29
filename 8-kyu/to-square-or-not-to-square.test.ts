import { squareOrSquareRoot } from './to-square-or-not-to-square';

describe('test suites for square-or-not-to-square kata', () => {
  test('should return [ 2, 9, 3, 49, 4, 1 ]', () => {
    expect(squareOrSquareRoot([4, 3, 9, 7, 2, 1])).toEqual([2, 9, 3, 49, 4, 1]);
  });

  test('should return [ 10, 10201, 25, 25, 1, 1 ]', () => {
    expect(squareOrSquareRoot([100, 101, 5, 5, 1, 1])).toEqual([
      10, 10201, 25, 25, 1, 1,
    ]);
  });

  test('should return [ 1, 4, 9, 2, 25, 36 ]', () => {
    expect(squareOrSquareRoot([1, 2, 3, 4, 5, 6])).toEqual([
      1, 4, 9, 2, 25, 36,
    ]);
  });
});
