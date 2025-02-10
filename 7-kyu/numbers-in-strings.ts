export function solve(s: string): number {
  const numStrings = Array.from(s.matchAll(/(\d+)/g)).map(([, g]) => g);
  return Math.max(...numStrings.map(Number));
}
