export function* fibonacciSequence(): Iterator<number> {
  let current = 1;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, next + current];
  }
}
