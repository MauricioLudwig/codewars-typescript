import { assertIsDefined } from '../@@utils/assertions';

export class Kata {
  static highAndLow(numbers: string): string {
    const orderedNumbers = numbers
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    const [low] = orderedNumbers;
    const [high] = orderedNumbers.slice(-1);

    assertIsDefined(high);
    assertIsDefined(low);

    return [high, low].join(' ');
  }
}
