export class Kata {
  static highAndLow(numbers: string): string {
    const orderedNumbers = numbers
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    const [low] = orderedNumbers;
    const [high] = orderedNumbers.slice(-1);

    return [high!, low!].join(' ');
  }
}
