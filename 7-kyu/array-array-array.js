export function explode(x) {
  if (x.every((o) => typeof o === 'string')) {
    return 'Void!';
  }

  const sum = x
    .filter((o) => typeof o === 'number')
    .reduce((acc, curr) => acc + curr, 0);
  return Array(sum).fill(x);
}
