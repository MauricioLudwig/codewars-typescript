export const abbrevName = (name: string): string =>
  name
    .split(' ')
    .map((o) => o[0]?.toUpperCase())
    .join('.');
