export const mirror = (text: string): string => {
  const words = text.split(' ').map((o) => o.split('').reverse().join(''));
  const max = Math.max(...words.map((o) => o.length));
  const border = Array(max + 4)
    .fill('*')
    .join('');
  const lines = words.map((w) => {
    const padZeros = max - w.length;
    return '* ' + w + Array(padZeros).fill(' ').join('') + ' *';
  });
  return [border, ...lines, border].join('\n');
};
