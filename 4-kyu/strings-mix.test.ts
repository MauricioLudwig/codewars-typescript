import { G964 } from './strings-mix';

describe('test suites for G964', () => {
  test('should accurately mix the strings', () => {
    const fixtures: [string, string, string][] = [
      ['Are they here', 'yes, they are here', '2:eeeee/2:yy/=:hh/=:rr'],
      [
        'looping is fun but dangerous',
        'less dangerous than coding',
        '1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg',
      ],
      [
        ' In many languages',
        ` there's a pair of functions`,
        '1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt',
      ],
    ];

    fixtures.forEach(([s1, s2, s3]) => {
      expect(G964.mix(s1, s2)).toEqual(s3);
    });
  });
});
