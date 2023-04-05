import { manhattanDistance } from './manhattan-distance';

type TPoint = [number, number];

const fixtures: Array<[TPoint, TPoint, number]> = [
  [[1, 1], [1, 1], 0],
  [[5, 4], [3, 2], 4],
  [[1, 1], [0, 3], 3]
];

test.each(fixtures)('should return manhattan distance', (s1, s2, s3) => {
  expect(manhattanDistance(s1, s2)).toBe(s3);
});
