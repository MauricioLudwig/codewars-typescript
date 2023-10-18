export function stringConstructing(a, s) {
  const appendStr = a.split('');
  const currentStr = [];
  const finalStr = s.split('');
  let iteration = 0;

  while (finalStr.join('') !== currentStr.join('')) {
    if (currentStr.length <= finalStr.length) {
      iteration++;
      currentStr.push(...appendStr);
    }

    let removeIndex = -1;

    for (let i = 0; i < currentStr.length; i++) {
      if (currentStr[i] !== finalStr[i]) {
        removeIndex = i;
        break;
      }
    }

    if (removeIndex > -1) {
      currentStr.splice(removeIndex, 1);
      iteration++;
    }
  }

  return iteration;
}
