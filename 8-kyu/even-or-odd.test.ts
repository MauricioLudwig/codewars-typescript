import { even_or_odd } from './even-or-odd';

test('should return either "Even" or "Odd" given the input', () => {
  const fixtures: [number, string][] = [
    [2, 'Even'],
    [0, 'Even'],
    [7, 'Odd'],
    [1, 'Odd'],
    [-4, 'Even'],
    [-3, 'Odd'],
  ];

  fixtures.forEach(([n1, n2]) => {
    expect(even_or_odd(n1)).toBe(n2);
  });
});
