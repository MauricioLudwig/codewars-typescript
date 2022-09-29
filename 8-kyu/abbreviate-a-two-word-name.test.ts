import { abbrevName } from './abbreviate-a-two-word-name';

describe('test suites for abbreviate-a-two-word-name kata', () => {
  test('should return "S.H"', () => {
    expect(abbrevName('Sam Harris')).toBe('S.H');
  });

  test('should return "P.F"', () => {
    expect(abbrevName('Patrick Feenan')).toBe('P.F');
  });

  test('should return "R.F"', () => {
    expect(abbrevName('R Favuzzi')).toBe('R.F');
  });
});
