import { narcissistic } from './does-my-number-look-big-in-this';

describe('test suites for does-my-number-look-big-in-this kata', () => {
  test('should return true for 7', () => {
    expect(narcissistic(7)).toBeTruthy();
  });

  test('should return true for 153', () => {
    expect(narcissistic(153)).toBeTruthy();
  });

  test('should return true for 1634', () => {
    expect(narcissistic(1634)).toBeTruthy();
  });
});
