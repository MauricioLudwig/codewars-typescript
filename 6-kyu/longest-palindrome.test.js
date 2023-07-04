import { longestPalindrome } from './longest-palindrome';

const fixtures = [
  ['a', 1],
  ['aa', 2],
  ['baa', 2],
  ['aab', 2],
  ['zyabyz', 1],
  ['BaaBcd', 4],
  ['baablkj12345432133d', 9],
  ['', 0],
  ['Aa', 1]
];

test.each(fixtures)(
  'should return correct length of longest palindrome',
  (arg, res) => {
    expect(longestPalindrome(arg)).toBe(res);
  }
);
