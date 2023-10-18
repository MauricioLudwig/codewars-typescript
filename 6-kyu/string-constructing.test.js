import { stringConstructing } from './string-constructing';

const fixtures = [
  [6, 'aba', 'abbaab'],
  [9, 'aba', 'abbabba'],
  [4, 'aba', 'abaa'],
  [3, 'aba', 'a'],
  [1, 'a', 'a'],
  [3, 'a', 'aaa'],
  [64, 'abcdefgh', 'hgfedcba'],
  [
    288,
    'sxdfcgdgxdfgdxxf',
    'xgdfsxgdxgfsgdfxgfdgfgdfgdgsdfxgfdxgdfxgdgdfgdfxgsdxgdfxgfgsxfgdfgsdfxgdfxgsgsfgxsgsdxgsdfxgsgsdfxgsdfx'
  ],
  [12, 'bbaabcbcbc', 'bbcccbabcc']
];

test.each(fixtures)('should return %s', (res, arg1, arg2) => {
  expect(stringConstructing(arg1, arg2)).toBe(res);
});
