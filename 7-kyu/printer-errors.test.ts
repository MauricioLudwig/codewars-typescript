import { G964 } from './printer-errors';

describe('test suites for printer-errors kata', () => {
  test('should return "3/56"', () => {
    expect(
      G964.printerError(
        'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'
      )
    ).toBe('3/56');
  });

  test('should return "6/60"', () => {
    expect(
      G964.printerError(
        'kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'
      )
    ).toBe('6/60');
  });

  test('should return "11/65"', () => {
    expect(
      G964.printerError(
        'kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu'
      )
    ).toBe('11/65');
  });
});
