import { encode } from './digital-cypher';

describe('test suites for digital-cypher kata', () => {
  test('should return [20, 12, 18, 30, 21]', () => {
    expect(encode('scout', 1939)).toEqual([20, 12, 18, 30, 21]);
  });

  test('should return [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]', () => {
    expect(encode('masterpiece', 1939)).toEqual([
      14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8,
    ]);
  });
});
