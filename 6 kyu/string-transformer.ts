export const stringTransformer = (str: string): string =>
  str
    .split(' ')
    .reverse()
    .map((o) => {
      return o
        .split('')
        .map((x) => (/[a-z]/.test(x) ? x.toUpperCase() : x.toLowerCase()))
        .join('');
    })
    .join(' ');
