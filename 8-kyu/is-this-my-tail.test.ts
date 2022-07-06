import { correctTail } from './is-this-my-tail';

describe('test suites for is-this-my-tail kata', () => {
  test('should return true', () => {
    expect(correctTail('Fox', 'x')).toBe(true);
  });

  test('should return true', () => {
    expect(correctTail('Rhino', 'o')).toBe(true);
  });

  test('should return true', () => {
    expect(correctTail('Meerkat', 't')).toBe(true);
  });
});
