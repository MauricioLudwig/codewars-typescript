import { Kata } from './square-every-digit';

test('should correctly square each digit in the number provided', () => {
  const fixtures: [number, number][] = [
    [9119, 811181],
    [0, 0],
  ];

  fixtures.forEach(([n1, n2]) => {
    expect(Kata.squareDigits(n1)).toEqual(n2);
  });
});
