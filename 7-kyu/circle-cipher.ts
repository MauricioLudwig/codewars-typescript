export function encode(s: string): string {
  const sArr: string[] = s.split('');
  const encodedS: string[] = [];
  let takeFirst = true;

  while (sArr.length > 0) {
    if (takeFirst) {
      encodedS.push(sArr.shift() ?? '');
    } else {
      encodedS.push(sArr.pop() ?? '');
    }

    takeFirst = !takeFirst;
  }

  return encodedS.join('');
}

export function decode(s: string): string {
  const sArr: string[] = s.split('');
  const encodedS: string[] = [];
  let index = 0;

  while (true) {
    const [n = ''] = sArr.splice(index % sArr.length, 1);
    encodedS.push(n);
    index++;

    if (index > sArr.length - 1) {
      break;
    }
  }

  return [...encodedS, ...sArr.reverse()].join('');
}
