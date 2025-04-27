export function replaceNth(
  text: string,
  n: number,
  oldValue: string,
  newValue: string
): string {
  let newText = '';
  let occurences = 0;

  if (n <= 0) {
    return text;
  }

  text.split('').forEach((o) => {
    if (o === oldValue) {
      occurences++;
    }

    if (occurences === n) {
      newText += newValue;
      occurences = 0;
    } else {
      newText += o;
    }
  });

  return newText;
}
