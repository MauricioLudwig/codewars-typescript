import { Challenge } from './multiples-of-3-or-5';

describe('test suites for multiples-of-3-or-5 kata', () => {
  test('should return 23', () => {
    expect(Challenge.solution(10)).toBe(23);
  });
});
