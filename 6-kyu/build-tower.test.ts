import { towerBuilder } from './build-tower';

describe('test suites for build-tower kata', () => {
  test('should work for level 1', () => {
    expect(towerBuilder(1)).toEqual(['*']);
  });

  test('should work for level 2', () => {
    expect(towerBuilder(2)).toEqual([' * ', '***']);
  });

  test('should work for level 3', () => {
    expect(towerBuilder(3)).toEqual(['  *  ', ' *** ', '*****']);
  });
});
