import { nextId } from './smallest-unused-id';

describe('test suites for nextId fn', () => {
  const fixtures: [number, Array<number>][] = [
    [4, [0, 1, 2, 3, 5]],
    [11, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    [
      1,
      [
        2, 25, 15, 14, 2, 25, 4, 3, 21, 22, 12, 30, 18, 4, 14, 24, 14, 5, 6, 19,
        17, 13, 2, 20, 0, 3, 29, 24, 10, 23
      ]
    ],
    [0, []]
  ];

  test.each(fixtures)('should return %s', (res, arg) => {
    expect(nextId(arg)).toBe(res);
  });
});
