import { assertIsDefined } from '../@@utils/assertions';

const timers: Record<string, number> = {
  G: 5,
  R: 5,
  O: 1
};

export const trafficLights = (road: string, n: number): string[] => {
  const nodes = road.split('');

  const carIndices = [...nodes]
    .map((o, i) => ({
      node: o,
      index: i
    }))
    .filter((o) => o.node === 'C')
    .reverse();

  const lightIndices = [...nodes]
    .map((o, i) => ({
      node: o,
      timer: timers[o] ?? 0,
      index: i
    }))
    .filter((o) => ['G', 'R', 'O'].includes(o.node));

  const canvas = Array(nodes.length).fill('.');

  const simulations: string[] = [road];

  for (let i = 0; i < n; i++) {
    lightIndices.forEach((o) => {
      o.timer--;

      if (o.timer === 0) {
        switch (o.node) {
          case 'G':
            o.node = 'O';
            break;
          case 'R':
            o.node = 'G';
            break;
          case 'O':
            o.node = 'R';
            break;
          default:
            throw new Error('');
        }

        const timer = timers[o.node];
        assertIsDefined(timer);
        o.timer = timer;
      }
    });

    carIndices.forEach((o) => {
      const light = lightIndices.find((l) => l.index === o.index + 1);

      if (light?.node === 'G') {
        if (!carIndices.some((c) => c.index === o.index + 2)) {
          o.index++;
        }
      }

      if (!light) {
        if (!carIndices.some((c) => c.index === o.index + 1)) {
          o.index++;
        }
      }

      if (o.index >= canvas.length) {
        o.index = Infinity;
      }
    });

    const canvasCopy = [...canvas];

    lightIndices.forEach((o) => {
      canvasCopy[o.index] = o.node;
    });

    carIndices.forEach((o) => {
      if (o.index < canvasCopy.length) {
        canvasCopy[o.index] = o.node;
      }
    });

    const sim = canvasCopy.join('');
    simulations.push(sim);
  }

  return simulations;
};
