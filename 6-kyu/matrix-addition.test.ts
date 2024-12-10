import { matrixAddition } from './matrix-addition';

type Matrix = number[][];

describe('test suites for matrixAddition kata', () => {
  const fixtures: [Matrix, Matrix, Matrix][] = [
    [
      [
        [1, 2],
        [1, 2]
      ],
      [
        [2, 3],
        [2, 3]
      ],
      [
        [3, 5],
        [3, 5]
      ]
    ],
    [[[1]], [[2]], [[3]]],
    [
      [
        [1, 2, 3],
        [3, 2, 1],
        [1, 1, 1]
      ],
      [
        [2, 2, 1],
        [3, 2, 3],
        [1, 1, 3]
      ],
      [
        [3, 4, 4],
        [6, 4, 4],
        [2, 2, 4]
      ]
    ]
  ];

  test.each(fixtures)('should add matrices', (a, b, res) => {
    expect(matrixAddition(a, b)).toEqual(res);
  });
});
