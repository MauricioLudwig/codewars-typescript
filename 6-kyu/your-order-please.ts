export const order = (words: string): string => {
  if (words === '') {
    return '';
  }

  const items: Array<{ word: string; order: number }> = words
    .split(' ')
    .map((o) => {
      const match = o.match(/(\d+)/);

      if (!match) {
        throw new Error(`No match found.`);
      }

      const [, s] = match;
      const digit = +s!;

      return {
        word: o,
        order: digit,
      };
    });

  const ordered = items.sort((a, b) => {
    const { order: orderA } = a;
    const { order: orderB } = b;

    if (orderA > orderB) {
      return 1;
    }

    if (orderB > orderA) {
      return -1;
    }

    return 0;
  });

  return ordered.map((o) => o.word).join(' ');
};
