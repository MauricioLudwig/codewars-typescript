export const longestRepetition = (text: string): [string, number] => {
  let maxCount = 0;
  let maxCountChar = '';

  let count = 0;
  let char = '';

  for (let i = 0; i < text.length; i++) {
    const el = text[i];

    if (char === el) {
      count++;
    } else {
      if (count > maxCount) {
        maxCount = count;
        maxCountChar = char ?? '';
      }
      count = 1;
      char = el ?? '';
    }
  }

  if (count > maxCount) {
    maxCount = count;
    maxCountChar = char ?? '';
  }

  return [maxCountChar, maxCount];
};
