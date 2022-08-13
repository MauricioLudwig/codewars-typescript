export const parse = (data: string): number[] => {
  const result: number[] = [];
  let val = 0;

  data.split('').forEach((o) => {
    switch (o) {
      case 'i':
        val++;
        break;
      case 'd':
        val--;
        break;
      case 's':
        val *= val;
        break;
      case 'o':
        result.push(val);
        break;
      default:
        break;
    }
  });

  return result;
};
