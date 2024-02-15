import { createPhoneNumber } from './create-phone-number';

describe('test suites for createPhoneNumber', () => {
  const fixtures: [string, number[]][] = [
    ['(123) 456-7890', [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]],
    ['(111) 111-1111', [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    ['(123) 456-7890', [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]]
  ];

  test.each(fixtures)('should return %s', (r, arg) => {
    expect(createPhoneNumber(arg)).toBe(r);
  });
});
