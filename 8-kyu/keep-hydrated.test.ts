import { litres } from './keep-hydrated';

describe('test suites for litres fn', () => {
  const fixtures: [number, number][] = [
    [2, 1],
    [1.4, 0],
    [12.3, 6],
    [0.82, 0],
    [11.8, 5],
    [1787, 893],
    [0, 0],
    [0.5, 0],
    [2.3, 1]
  ];

  it.each(fixtures)('should return %s', (arg, res) => {
    expect(litres(arg)).toBe(res);
  });
});
