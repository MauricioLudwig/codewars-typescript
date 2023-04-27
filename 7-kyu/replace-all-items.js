export function replaceAll(seq, find, replace) {
  const isString = typeof seq === 'string';
  const arr = isString ? seq.split('') : [...seq];
  const replacedArr = arr.map((o) => (o === find ? replace : o));
  return isString ? replacedArr.join('') : replacedArr;
}
