import { mazeRunner } from './maze-runner';

const maze: number[][] = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

describe('test suites for mazeRunner kata', () => {
  test('should return correct output when navigating the maze', () => {
    const fixtures: [Array<string>, string][] = [
      [['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'], 'Finish'],
      [
        ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E'],
        'Finish',
      ],
      [['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W'], 'Finish'],
      [['N', 'N', 'N', 'W', 'W'], 'Dead'],
      [['N', 'E', 'E', 'E', 'E'], 'Lost'],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(mazeRunner(maze, n1)).toBe(n2);
    });
  });
});
