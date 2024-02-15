export function createPhoneNumber(numbers: number[]): string {
  const arr = [...numbers];
  const n1 = arr.splice(0, 3);
  const n2 = arr.splice(0, 3);

  return `(${n1.join('')}) ${[n2.join(''), arr.join('')].join('-')}`;
}
