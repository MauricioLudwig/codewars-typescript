import { persistence } from './persistent-bugger';

describe('test suites for persistent-bugger kata', () => {
  test('should return 3', () => {
    expect(persistence(39)).toBe(3);
  });

  test('should return 0', () => {
    expect(persistence(4)).toBe(0);
  });

  test('should return 2', () => {
    expect(persistence(25)).toBe(2);
  });

  test('should return 4', () => {
    expect(persistence(999)).toBe(4);
  });
});
