const VOWELS_ENCODE: Record<string, number> = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
};

const VOWELS_DECODE: Record<string, string> = Object.entries(
  VOWELS_ENCODE
).reduce(
  (acc, [k, v]) => ({
    ...acc,
    [v]: k
  }),
  {} as Record<string, string>
);

export function encode(string: string): string {
  return string
    .split('')
    .map((o) => VOWELS_ENCODE[o.toLowerCase()] ?? o)
    .join('');
}

export function decode(string: string): string {
  return string
    .split('')
    .map((o) => VOWELS_DECODE[o.toLowerCase()] ?? o)
    .join('');
}
