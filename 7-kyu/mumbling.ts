export const accum = (s: string): string =>
  s
    .split('')
    .map((o, i) => {
      const [first, ...rest] = Array(i + 1).fill(o) as string[];
      return first?.toUpperCase() + rest.map((o) => o.toLowerCase()).join('');
    })
    .join('-');
