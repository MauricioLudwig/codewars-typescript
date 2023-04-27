import { replaceAll } from './replace-all-items';

const fixtures = [
  [[], 1, 2, []],
  [[1, 2, 2], 1, 2, [2, 2, 2]]
];

test.each(fixtures)(
  'should return correct array',
  (arg1, arg2, arg3, result) => {
    expect(replaceAll(arg1, arg2, arg3)).toEqual(result);
  }
);
