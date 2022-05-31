import { explode } from './array-array-array';

describe('test suites for array-array-array kata', () => {
  test('should return [9, 3] multiple', () => {
    expect(explode([9, 3])).toEqual([
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
    ]);
  });

  test('should return ["a", 3] multiple', () => {
    expect(explode(['a', 3])).toEqual([
      ['a', 3],
      ['a', 3],
      ['a', 3],
    ]);
  });

  test('should return [6, "c"] multiple', () => {
    expect(explode([6, 'c'])).toEqual([
      [6, 'c'],
      [6, 'c'],
      [6, 'c'],
      [6, 'c'],
      [6, 'c'],
      [6, 'c'],
    ]);
  });

  test('should return "Void!"', () => {
    expect(explode(['a', 'b'])).toEqual('Void!');
  });

  test('should return an empty array', () => {
    expect(explode(['a', 0])).toEqual([]);
  });
});
