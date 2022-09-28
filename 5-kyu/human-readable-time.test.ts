import { humanReadable } from './human-readable-time';

describe('test suites for human-readable-time kata', () => {
  test('should return "00:00:00"', () => {
    expect(humanReadable(0)).toBe('00:00:00');
  });

  test('should return "00:00:05"', () => {
    expect(humanReadable(5)).toBe('00:00:05');
  });

  test('should return "00:01:00"', () => {
    expect(humanReadable(60)).toBe('00:01:00');
  });

  test('should return "23:59:59"', () => {
    expect(humanReadable(86399)).toBe('23:59:59');
  });

  test('should return "99:59:59"', () => {
    expect(humanReadable(359999)).toBe('99:59:59');
  });
});
