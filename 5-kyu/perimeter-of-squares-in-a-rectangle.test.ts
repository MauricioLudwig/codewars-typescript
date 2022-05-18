import { G964 } from './perimeter-of-squares-in-a-rectangle';

test('test suites for G964 kata', () => {
  const fixtures: [number, number][] = [
    [5, 80],
    [7, 216],
    [20, 114624],
    [30, 14098308],
  ];

  fixtures.forEach(([n1, n2]) => {
    expect(G964.perimeter(n1)).toEqual(n2);
  });
});
