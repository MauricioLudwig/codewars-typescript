export const toAlternativeCase = (s: string): string =>
  Array.from(s)
    .map((o) => (/[A-Z]/.test(o) ? o.toLowerCase() : o.toUpperCase()))
    .join('');
