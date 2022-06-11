import { vowelIndices } from './find-the-vowels';

describe('test suites for find-the-vowels kata', () => {
  test('should return an empty array', () => {
    expect(vowelIndices('mmm')).toEqual([]);
  });

  test('should return [1, 5]', () => {
    expect(vowelIndices('apple')).toEqual([1, 5]);
  });

  test('should return [2, 4]', () => {
    expect(vowelIndices('super')).toEqual([2, 4]);
  });

  test('should return [1, 3, 6]', () => {
    expect(vowelIndices('orange')).toEqual([1, 3, 6]);
  });

  test('should return [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]', () => {
    expect(vowelIndices('supercalifragilisticexpialidocious')).toEqual([
      2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33,
    ]);
  });
});
