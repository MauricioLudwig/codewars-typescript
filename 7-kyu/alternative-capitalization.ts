export const capitalize = (s: string): string[] => {
  const arr = s.split('');
  const even = arr.map((o, i) => (i % 2 === 0 ? o.toUpperCase() : o));
  const odd = arr.map((o, i) => (i % 2 === 1 ? o.toUpperCase() : o));
  return [even, odd].map((o) => o.join(''));
};
