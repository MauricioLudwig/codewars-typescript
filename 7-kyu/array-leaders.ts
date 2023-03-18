export function arrayLeaders(numbers: number[]): number[] {
  return numbers.filter(
    (n, i, arr) => n > arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0)
  );
}
