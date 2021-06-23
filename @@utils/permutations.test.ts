import { generatePermutations } from './permutations';

test('should correctly generate permutations', () => {
  const fixtures: [string, string[]][] = [
    ['12', ['12', '21']],
    ['513', ['513', '531', '153', '135', '351', '315']],
    ['111', ['111']],
  ];

  fixtures.forEach(([n1, n2]) => {
    expect(generatePermutations(n1)).toEqual(n2);
  });
});
