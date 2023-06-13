import { getRealFloor } from './what-is-the-real-floor';

const fixtures: Array<[number, number]> = [
  [0, 1],
  [4, 5],
  [13, 15],
  [-1, -1]
];

test.each(fixtures)('should return %s for %s', (res, arg) => {
  expect(getRealFloor(arg)).toBe(res);
});
