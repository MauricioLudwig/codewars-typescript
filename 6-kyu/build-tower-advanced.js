export const towerBuilder = (nFloors, nBlocksSz) => {
  const towers = [];
  let numOfBlocks = getMaxNumOfBlocks(nFloors, nBlocksSz);
  let numOfSpaces = 0;
  const [width, height] = nBlocksSz;

  for (let i = nFloors; i > 0; i--) {
    const blocks = getRangeOfChars('*', numOfBlocks);
    const spaces = getRangeOfChars(' ', numOfSpaces);
    const floor = spaces + blocks + spaces;
    towers.unshift(...Array(height).fill(floor));
    numOfBlocks -= width * 2;
    numOfSpaces += width;
  }

  return towers;
};

const getRangeOfChars = (c, range) => Array(range).fill(c).join('');

export const getMaxNumOfBlocks = (nFloors, [width]) =>
  width * 2 * (nFloors - 1) + width;
