import { pigIt } from './simple-pig-latin';

describe('test fixtures for pigIt fn', () => {
  const fixtures: [string, string][] = [
    ['igPay atinlay siay oolcay', 'Pig latin is cool'],
    ['hisTay siay ymay tringsay', 'This is my string']
  ];

  test.each(fixtures)('should return %s', (res, arg) => {
    expect(pigIt(arg)).toBe(res);
  });
});
