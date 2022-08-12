export const findShort = (s: string): number =>
  Math.min(...s.split(' ').map((o) => o.length));
