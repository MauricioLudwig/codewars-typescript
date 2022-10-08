export class Kata {
  static disemvowel(str: string): string {
    return str
      .split('')
      .filter((o) => !'aeiou'.includes(o.toLowerCase()))
      .join('');
  }
}
