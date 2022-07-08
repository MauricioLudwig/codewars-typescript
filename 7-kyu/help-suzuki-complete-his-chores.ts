import { assertIsDefined } from '../@@utils/assertions';

export const choreAssignment = (chores: number[]): number[] => {
  const choresAsc = [...chores].sort((a, b) => a - b);
  const workload: number[] = [];

  while (choresAsc.length > 0) {
    const first = choresAsc.shift();
    const last = choresAsc.pop();

    assertIsDefined(first);
    assertIsDefined(last);

    workload.push(first + last);
  }

  return workload.sort((a, b) => a - b);
};
