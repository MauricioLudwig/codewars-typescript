export class Kata {
  static spinWords(words: string) {
    return words
      .split(' ')
      .map((o) => {
        if (o.length >= 5) {
          return o.split('').reverse().join('');
        }

        return o;
      })
      .join(' ');
  }
}
