import { countSmileys } from './count-the-smiley-faces';

describe('test suites for count-the-smiley-faces kata', () => {
  test('should return 0', () => {
    expect(countSmileys([])).toBe(0);
  });

  test('should return 4', () => {
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toBe(4);
  });

  test('should return 2', () => {
    expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toBe(2);
  });

  test('should return 1', () => {
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });
});
