export function checkExam(array1: string[], array2: string[]): number {
  const sum = array2.reduce((acc, curr, i) => {
    const correctAnswer = array1[i];
    if (curr === correctAnswer) {
      return acc + 4;
    } else if (curr === '') {
      return acc;
    } else {
      return acc - 1;
    }
  }, 0);

  return sum > 0 ? sum : 0;
}
