import { invert } from './invert-values';

const fixtures: Array<[Array<number>, Array<number>]> = [
  [
    [1, 2, 3, 4, 5],
    [-1, -2, -3, -4, -5]
  ],
  [
    [1, -2, 3, -4, 5],
    [-1, 2, -3, 4, -5]
  ],
  [[], []],
  [[0], [-0]]
];

test.each(fixtures)('should, for %s, return %s', (arg1, result) => {
  expect(invert(arg1)).toEqual(result);
});
