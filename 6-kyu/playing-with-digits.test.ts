import { G964 } from './playing-with-digits';

describe('test suites for playing-with-digits kata', () => {
  test('should return 1', () => {
    expect(G964.digPow(89, 1)).toBe(1);
  });

  test('should return -1', () => {
    expect(G964.digPow(92, 1)).toBe(-1);
  });

  test('should return 9', () => {
    expect(G964.digPow(114, 3)).toBe(9);
  });
});
