export function longestConsec(arr: Array<string>, k: number): string {
  if (k > arr.length || k <= 0) {
    return '';
  }

  const [shortest = ''] = arr
    .map((_, i) => {
      const x = arr.slice(i, k + i).join('');
      return x;
    })
    .sort((a, b) => b.length - a.length);

  return shortest;
}
