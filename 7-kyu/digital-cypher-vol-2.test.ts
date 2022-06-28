import { decode } from './digital-cypher-vol-2';

describe('test suites for digital-cypher-vol-2 kata', () => {
  test('should return scout', () => {
    expect(decode([20, 12, 18, 30, 21], 1939)).toBe('scout');
  });

  test('should return masterpiece', () => {
    expect(decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939)).toBe(
      'masterpiece'
    );
  });
});
