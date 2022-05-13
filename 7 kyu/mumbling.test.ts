import { accum } from './mumbling';

describe('test suites for accum kata', () => {
  test('should return correct output strings', () => {
    const fixtures: [string, string][] = [
      [
        'ZpglnRxqenU',
        'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
      ],
      [
        'NyffsGeyylB',
        'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
      ],
      [
        'MjtkuBovqrU',
        'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu',
      ],
      [
        'EvidjUnokmM',
        'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm',
      ],
      [
        'HbideVbxncC',
        'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc',
      ],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(accum(n1)).toBe(n2);
    });
  });
});
