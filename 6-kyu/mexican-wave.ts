export const wave = (str: string): Array<string> => {
  if (str.length === 0) {
    return [];
  }

  const letters = str.split('');

  return letters
    .map((_, i1) => {
      return letters
        .map((o, i2) => {
          if (o === ' ') {
            return ' ';
          }

          if (i1 === i2) {
            return o.toUpperCase();
          }

          return o;
        })
        .join('');
    })
    .filter((o) => o !== str);
};
