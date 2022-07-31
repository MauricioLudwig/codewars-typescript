import { Kata } from './vowel-count';

describe('test suites for vowel-count kata', () => {
  test('should return 5', () => {
    expect(Kata.getCount('abracadabra')).toBe(5);
  });
});
