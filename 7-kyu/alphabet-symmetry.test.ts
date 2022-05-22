import { solve } from './alphabet-symmetry';

describe('test suites for alphabet-symmetry kata', () => {
  test('should return [4, 3, 1]', () => {
    expect(solve(['abode', 'ABc', 'xyzD'])).toEqual([4, 3, 1]);
  });

  test('should return [4, 3, 0]', () => {
    expect(solve(['abide', 'ABc', 'xyz'])).toEqual([4, 3, 0]);
  });

  test('should return [6, 5, 7]', () => {
    expect(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])).toEqual([
      6, 5, 7,
    ]);
  });

  test('should return [1, 3, 1, 3]', () => {
    expect(solve(['encode', 'abc', 'xyzD', 'ABmD'])).toEqual([1, 3, 1, 3]);
  });
});
