import { bestFriend } from './a-letters-best-friend';

const fixtures: [boolean, string, string, string][] = [
  [true, 'he headed to the store', 'h', 'e'],
  [true, 'i found an ounce with my hound', 'o', 'u'],
  [true, 'those were their thorns they said', 't', 'h'],
  [false, 'we found your dynamite', 'd', 'y'],
  [false, 'look they took the cookies', 'o', 'o'],
  [false, 'a test', 't', 'e'],
  [false, 'abcdee', 'e', 'e'],
  [false, 'abcde', 'e', 'e']
];

test.each(fixtures)('should return %s', (res, arg1, arg2, arg3) => {
  expect(bestFriend(arg1, arg2, arg3)).toBe(res);
});
