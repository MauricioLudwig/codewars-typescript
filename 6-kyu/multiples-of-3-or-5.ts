export class Challenge {
  static solution(number: number) {
    const validNumbers: number[] = [];

    for (let i = number - 1; i >= 3; i--) {
      if (i % 3 === 0 || i % 5 === 0) {
        validNumbers.push(i);
      }
    }

    return validNumbers.reduce((acc, curr) => acc + curr, 0);
  }
}
