export function nextId(ids: number[]): number {
  if (ids.length === 0) {
    return 0;
  }

  const sortedIds = Array.from(new Set(ids)).sort((a, b) => a - b);

  for (let i = 0; i < sortedIds.length; i++) {
    const n = sortedIds[i] ?? 0;

    if (n > i) {
      return i;
    }
  }

  return (sortedIds[sortedIds.length - 1] ?? 0) + 1;
}
