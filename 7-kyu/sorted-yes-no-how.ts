export const isSortedAndHow = (arr: number[]): string => {
  const asc = [...arr].sort((a, b) => a - b);

  if (arr.toString() === asc.toString()) {
    return 'yes, ascending';
  } else if (arr.toString() === asc.reverse().toString()) {
    return 'yes, descending';
  } else {
    return 'no';
  }
};
