export function getRealFloor(n: number): number {
  if (n < 1) {
    return n;
  } else if (n > 13) {
    return n - 2;
  } else {
    return n - 1;
  }
}
