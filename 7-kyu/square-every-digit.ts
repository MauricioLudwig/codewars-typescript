export class Kata {
  static squareDigits(num: number): number {
    const seq = num
      .toString()
      .split('')
      .map((o) => Math.pow(Number(o), 2));
    const s = seq.map((o) => o.toString()).join('');
    return Number(s);
  }
}
