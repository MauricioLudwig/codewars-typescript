import { triangle } from './letter-triangles';

const fixtures: Array<[string, string]> = [
  ['codewars', 'l'],
  ['triangle', 'd'],
  ['youhavechosentotranslatethiskata', 'a'],
  ['b', 'b']
];

test.each(fixtures)('should, for %s, return %s', (arg, result) => {
  expect(triangle(arg)).toBe(result);
});
