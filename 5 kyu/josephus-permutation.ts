export const josephus = <T>(items: T[], k: number): T[] => {
  const sequence = [...items];
  const permutation = new Array<T>();
  let index = 0;

  while (sequence.length > 0) {
    index += k - 1;

    if (index > sequence.length - 1) {
      index %= sequence.length;
    }

    const [item] = sequence.splice(index, 1);

    if (typeof item === undefined) {
      throw new Error('Spliced item was undefined');
    }

    permutation.push(item!);
  }

  return permutation;
};
