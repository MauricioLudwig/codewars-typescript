import { oddCount } from './count-odd-numbers-below-n';

describe('test suites for count-odd-numbers-below-n kata', () => {
  test('should return 3', () => {
    expect(oddCount(7)).toBe(3);
  });

  test('should return 7', () => {
    expect(oddCount(15)).toBe(7);
  });
});
