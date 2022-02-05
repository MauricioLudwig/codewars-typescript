import { josephus } from './josephus-permutation';

type TFixture<T> = {
  input: [T[], number];
  output: T[];
};

describe('test suites for josephus permutation', () => {
  test('should return correct permutation for number inputs', () => {
    const fixtures: TFixture<number>[] = [
      {
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1],
        output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      {
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2],
        output: [2, 4, 6, 8, 10, 3, 7, 1, 9, 5],
      },
      {
        input: [[1, 2, 3, 4, 5, 6, 7], 3],
        output: [3, 6, 2, 7, 5, 1, 4],
      },
      {
        input: [[], 3],
        output: [],
      },
    ];

    fixtures.forEach(({ input, output }) => {
      const [n1, n2] = input;
      expect(josephus(n1, n2)).toEqual(output);
    });
  });

  test('should return correct permutation for string inputs', () => {
    const fixtures: TFixture<string>[] = [
      {
        input: [['C', 'o', 'd', 'e', 'W', 'a', 'r', 's'], 4],
        output: ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'],
      },
    ];

    fixtures.forEach(({ input, output }) => {
      const [n1, n2] = input;
      expect(josephus(n1, n2)).toEqual(output);
    });
  });
});
