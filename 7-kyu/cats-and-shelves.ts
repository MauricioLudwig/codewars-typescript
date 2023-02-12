export function solution(start: number, finish: number) {
  const range = finish - start;
  const remainder = range % 3;
  const threesJumps = Math.floor((range - remainder) / 3);
  return threesJumps + remainder;
}
