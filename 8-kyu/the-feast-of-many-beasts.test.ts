import { feast } from './the-feast-of-many-beasts';

const fixtures: Array<[boolean, string, string]> = [
  [true, 'great blue heron', 'garlic naan'],
  [true, 'chickadee', 'chocolate cake'],
  [false, 'brown bear', 'bear claw']
];

test.each(fixtures)('should return %s', (res, arg1, arg2) => {
  expect(feast(arg1, arg2)).toBe(res);
});
