import { Kata } from './regex-validate-pin-code';

type TFixture = [string, boolean][];

describe('test suites for regex validate pin code', () => {
  test('should return False for pins with length other than 4 or 6', () => {
    const fixtures: TFixture = [
      ['1', false],
      ['12', false],
      ['123', false],
      ['12345', false],
      ['1234567', false],
      ['-1234', false],
      ['1.234', false],
      ['00000000', false],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(Kata.validatePin(n1)).toEqual(n2);
    });
  });

  test('should return False for pins which contain characters other than digits', () => {
    const fixtures: TFixture = [
      ['a234', false],
      ['.234', false],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(Kata.validatePin(n1)).toEqual(n2);
    });
  });

  test('should return True for valid pins', () => {
    const fixtures: TFixture = [
      ['1234', true],
      ['0000', true],
      ['1111', true],
      ['123456', true],
      ['098765', true],
      ['123456', true],
      ['000000', true],
      ['090909', true],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(Kata.validatePin(n1)).toEqual(n2);
    });
  });
});
