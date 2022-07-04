import { contentWeight } from './weight-of-its-contents';

describe('test suites for weight-of-its-contents kata', () => {
  test('should return 80', () => {
    expect(contentWeight(120, '2 times larger')).toBe(80);
  });
});
