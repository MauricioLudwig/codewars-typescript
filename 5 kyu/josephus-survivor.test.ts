import { josephusSurvivor } from './josephus-survivor';

test('should correctly return the last survivor of the josephus problem', () => {
  const fixtures: [[number, number], number][] = [
    [[7, 3], 4],
    [[11, 19], 10],
    [[40, 3], 28],
    [[14, 2], 13],
    [[100, 1], 100],
    [[1, 300], 1],
    [[2, 300], 1],
    [[5, 300], 1],
    [[7, 300], 7],
    [[300, 300], 265],
  ];

  fixtures.forEach(([n1, n2]) => {
    const [n3, n4] = n1;
    expect(josephusSurvivor(n3, n4)).toEqual(n2);
  });
});
