export const reverse = (str) => {
  if (str.trim() === '') {
    return str.trim();
  }
  return str
    .match(/([a-z0-9',.!?]+)/gi)
    .map((o, i) => (i % 2 === 0 ? o : o.split('').reverse().join('')))
    .join(' ');
};
