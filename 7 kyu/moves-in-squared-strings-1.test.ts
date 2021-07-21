import { vertMirror, horMirror, oper } from './moves-in-squared-strings-1';

describe('test suites for moves-in-squared-strings-1 kata', () => {
  test('should correctly perform vertical mirror operation', () => {
    expect(vertMirror('abcd\nefgh\nijkl\nmnop')).toEqual(
      'dcba\nhgfe\nlkji\nponm'
    );
  });

  test('should correctly perform horizontal mirror operation', () => {
    expect(horMirror('abcd\nefgh\nijkl\nmnop')).toEqual(
      'mnop\nijkl\nefgh\nabcd'
    );
  });

  test('should correctly perform operation for higher order function (vertical)', () => {
    expect(
      oper(vertMirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu')
    ).toEqual('QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw');
  });

  test('should correctly perform operation for higher order function (horizontal)', () => {
    expect(oper(horMirror, 'lVHt\nJVhv\nCSbg\nyeCt')).toEqual(
      'yeCt\nCSbg\nJVhv\nlVHt'
    );
  });
});
