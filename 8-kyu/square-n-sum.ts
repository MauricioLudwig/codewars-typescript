/*

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

// map [] => []
// reduce [] => [[]], {}, 1

export const squareSum = (numbers: number[]): number =>
  numbers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
