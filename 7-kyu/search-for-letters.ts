const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export function change(string: string): string {
  const lowerCaseString = string.toLowerCase();

  return alphabet
    .split('')
    .map((o) => (lowerCaseString.includes(o) ? '1' : '0'))
    .join('');
}
