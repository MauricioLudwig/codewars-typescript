export const towerBuilder = (nFloors: number): string[] => {
  const towers: string[] = [];
  let numOfBlocks = 1 + (nFloors - 1) * 2;
  let numOfSpaces = 0;

  for (let i = nFloors; i > 0; i--) {
    const blocks = getRangeOfChars('*', numOfBlocks);
    const spaces = getRangeOfChars(' ', numOfSpaces);
    towers.unshift(spaces + blocks + spaces);
    numOfBlocks -= 2;
    numOfSpaces += 1;
  }

  return towers;
};

const getRangeOfChars = (c: string, range: number): string =>
  Array(range).fill(c).join('');
