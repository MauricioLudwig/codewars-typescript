import { change } from './search-for-letters';

describe('test suites for change fn', () => {
  const fixtures: [string, string][] = [
    ['11000000000000000000000001', 'a **&  bZ'],
    ['10100000000000000000000001', 'a   **&  cZ'],
    ['10000000000000000000000000', 'aaaaaaa79345675'],
    ['00000000000000000000000000', '&%#*']
  ];

  test.each(fixtures)('should return %s', (res, arg) => {
    expect(change(arg)).toEqual(res);
  });
});
