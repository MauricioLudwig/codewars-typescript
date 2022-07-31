export class Kata {
  static getCount(str: string): number {
    return str.split('').filter((o) => ['a', 'e', 'i', 'o', 'u'].includes(o))
      .length;
  }
}
