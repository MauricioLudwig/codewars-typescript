import { cookingTime } from './boiled-eggs';

const fixtures: [number, number][] = [
  [0, 0],
  [5, 5],
  [10, 10]
];

test.each(fixtures)('should return, for %s, %s', (n1, n2) => {
  expect(cookingTime(n1)).toBe(n2);
});
