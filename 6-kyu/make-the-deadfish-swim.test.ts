import { parse } from './make-the-deadfish-swim';

describe('test suites for make-the-deadfish-swim kata', () => {
  test('should return [8, 64]', () => {
    expect(parse('iiisdoso')).toEqual([8, 64]);
  });

  test('should return [8, 64]', () => {
    expect(parse('iiisxxxdoso')).toEqual([8, 64]);
  });
});
