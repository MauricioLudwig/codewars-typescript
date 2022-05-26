export function diff(poly) {
  poly.pop();
  return poly
    .reverse()
    .map((o, i) => o * (i + 1))
    .reverse();
}
