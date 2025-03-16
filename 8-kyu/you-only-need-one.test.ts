import { check } from './you-only-need-one';

describe('test suites for check fn', () => {
  const fixtures: [boolean, Array<number | string>, number | string][] = [
    [true, [66, 101], 66],
    [true, [80, 117, 115, 104, 45, 85, 112, 115], 45],
    [true, ['t', 'e', 's', 't'], 'e'],
    [false, ['what', 'a', 'great', 'kata'], 'kat']
  ];

  test.each(fixtures)('should return %s', (res, arg1, arg2) => {
    expect(check(arg1, arg2)).toBe(res);
  });
});
