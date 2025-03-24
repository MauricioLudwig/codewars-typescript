export const pigIt = (a: string): string => {
  return a
    .split(' ')
    .map((o) => {
      if (!o.trim()) {
        return o;
      }

      if (/[\.\!\?]/.test(o)) {
        return o;
      }

      const [f = '', ...rest] = o.split('');
      return [...rest, f, 'ay'].join('');
    })
    .join(' ');
};
