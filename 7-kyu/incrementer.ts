export const incrementer = (num: number[]) =>
  num.map((o, i) => {
    const value = o + i + 1;

    if (value >= 10) {
      const [digitString] = value.toString().split('').reverse();
      return +digitString!;
    }

    return value;
  });
