import { capitalize } from './alternative-capitalization';

describe('test suites for capitalize kata', () => {
  test('should return array with correct capitalization', () => {
    const fixtures: [string, Array<string>][] = [
      ['abcdef', ['AbCdEf', 'aBcDeF']],
      ['codewars', ['CoDeWaRs', 'cOdEwArS']],
      ['abracadabra', ['AbRaCaDaBrA', 'aBrAcAdAbRa']],
      ['codewarriors', ['CoDeWaRrIoRs', 'cOdEwArRiOrS']],
      ['indexinglessons', ['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs']],
      [
        'codingisafunactivity',
        ['CoDiNgIsAfUnAcTiViTy', 'cOdInGiSaFuNaCtIvItY'],
      ],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(capitalize(n1)).toEqual(n2);
    });
  });
});
