import { alphabetArr } from '../@@utils/alphabet';

export function triangle(row: string): string {
  let letters = row.split('');

  while (letters.length > 1) {
    const next: string[] = [];

    for (let i = 0; i < letters.length - 1; i++) {
      const sum = letters
        .slice(i, i + 2)
        .map((o) => alphabetArr.indexOf(o) + 1)
        .reduce((acc, curr) => acc + curr, 0);

      next.push(alphabetArr[(sum - 1) % alphabetArr.length]!);
    }

    letters = [...next];
  }

  return letters.join('');
}
