import { updateLight } from './traffic-light';

const fixtures: Array<[string, string]> = [
  ['green', 'yellow'],
  ['yellow', 'red'],
  ['red', 'green']
];

test.each(fixtures)('should, for %s, return %s', (arg1, result) => {
  expect(updateLight(arg1)).toBe(result);
});
