import { sumOfIntervals } from './sum-of-intervals';

test('should correctly return correct intervals for test cases', () => {
  const fixtures: [Array<[number, number]>, number][] = [
    [[[1, 5]], 4],
    [
      [
        [1, 5],
        [6, 10],
      ],
      8,
    ],
    [
      [
        [1, 5],
        [1, 5],
      ],
      4,
    ],
    [
      [
        [1, 4],
        [7, 10],
        [3, 5],
      ],
      7,
    ],
  ];

  fixtures.forEach(([n1, n2]) => {
    expect(sumOfIntervals(n1)).toEqual(n2);
  });
});
