import { solution } from './cats-and-shelves';

const fixtures: [number, number, number][] = [
  [1, 5, 2],
  [3, 3, 0],
  [2, 4, 2],
  [61, 70, 3],
  [31, 56, 9]
];

test.each(fixtures)('should test solution fn', (n1, n2, n3) => {
  expect(solution(n1, n2)).toEqual(n3);
});
