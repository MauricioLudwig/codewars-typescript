import { checkExam } from './check-the-exam';

const fixtures: [number, Array<string>, Array<string>][] = [
  [6, ['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']],
  [7, ['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']],
  [16, ['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']],
  [0, ['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']]
];

test.each(fixtures)('should return %s', (res, arg1, arg2) => {
  expect(checkExam(arg1, arg2)).toBe(res);
});
