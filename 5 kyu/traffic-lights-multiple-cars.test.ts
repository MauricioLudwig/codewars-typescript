import { trafficLights } from './traffic-lights-multiple-cars';

test('should output simulated steps', () => {
  const result = [
    'CCC.G...R...',
    '.CCCG...R...',
    '..CCC...R...',
    '..CCGC..R...',
    '...CC.C.R...',
    '...COC.CG...',
    '...CR.C.C...',
    '...CR..CGC..',
    '...CR...C.C.',
    '...CR...GC.C',
    '...CR...O.C.',
    '....C...R..C',
    '....GC..R...',
    '....G.C.R...',
    '....G..CR...',
    '....G..CR...',
    '....O...C...',
  ];

  expect(trafficLights(result[0]!, 16)).toEqual(result);
});
