import { towerBuilder, getMaxNumOfBlocks } from './build-tower-advanced';

describe('test suites for build-tower-advanced kata', () => {
  test('should work for level 1 with width 1 & height 1', () => {
    expect(towerBuilder(1, [1, 1])).toEqual(['*']);
  });

  test('should work for level 3 with width 4 & height 2', () => {
    expect(towerBuilder(3, [4, 2])).toEqual([
      '        ****        ',
      '        ****        ',
      '    ************    ',
      '    ************    ',
      '********************',
      '********************',
    ]);
  });
});

describe('test suites for getMaxNumOfBlocks', () => {
  test('should return 10', () => {
    expect(getMaxNumOfBlocks(3, [2, 3])).toBe(10);
  });
});
