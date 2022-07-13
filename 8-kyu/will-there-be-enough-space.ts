export const enough = (cap: number, on: number, wait: number): number => {
  const passengers = cap - on - wait;
  return passengers >= 0 ? 0 : Math.abs(passengers);
};
