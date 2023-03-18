import { arrayLeaders } from './array-leaders';

const fixtures: [Array<number>, Array<number>][] = [
  [[1, 2, 3, 4, 0], [4]],
  [
    [16, 17, 4, 3, 5, 2],
    [17, 5, 2]
  ],
  [[-1, -29, -26, -2], [-1]],
  [
    [-36, -12, -27],
    [-36, -12]
  ],
  [
    [5, -2, 2],
    [5, 2]
  ],
  [
    [0, -1, -29, 3, 2],
    [0, -1, 3, 2]
  ]
];

test.each(fixtures)('should find the leaders in the given array', (n1, n2) => {
  expect(arrayLeaders(n1)).toEqual(n2);
});
