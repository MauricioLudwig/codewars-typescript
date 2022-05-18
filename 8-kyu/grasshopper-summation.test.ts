import { summation } from './grasshopper-summation';

test('should correctly return the sum of the series', () => {
  const fixtures: [number, number][] = [
    [2, 3],
    [8, 36],
  ];

  fixtures.forEach(([n1, n2]) => {
    expect(summation(n1)).toBe(n2);
  });
});
