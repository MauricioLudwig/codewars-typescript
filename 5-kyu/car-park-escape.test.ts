import { escape } from './car-park-escape';

describe('test suites for car park escape kata', () => {
  test('should return correct path for escape', () => {
    const fixtures: [number[][], Array<string>][] = [
      [
        [
          [1, 0, 0, 0, 2],
          [0, 0, 0, 0, 0],
        ],
        ['L4', 'D1', 'R4'],
      ],
      [
        [
          [2, 0, 0, 1, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0],
        ],
        ['R3', 'D2', 'R1'],
      ],
      [
        [
          [0, 2, 0, 0, 1],
          [0, 0, 0, 0, 1],
          [0, 0, 0, 0, 1],
          [0, 0, 0, 0, 0],
        ],
        ['R3', 'D3'],
      ],
      [
        [
          [1, 0, 0, 0, 2],
          [0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        ['L4', 'D1', 'R4', 'D1', 'L4', 'D1', 'R4'],
      ],
      [[[0, 0, 0, 0, 2]], []],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(escape(n1)).toEqual(n2);
    });
  });
});
