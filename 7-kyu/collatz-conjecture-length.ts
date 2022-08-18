export const collatz = (n: number): number => {
  let seq = n;
  let count = 1;

  while (true) {
    count++;
    seq = seq % 2 === 0 ? seq / 2 : seq * 3 + 1;
    if (seq === 1) {
      break;
    }
  }

  return count;
};
