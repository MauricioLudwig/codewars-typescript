import { encode, decode } from './circle-cipher';

describe('test suites for circle-cipher kata', () => {
  const encodeFixtures: [string, string][] = [
    ['codewars', 'csordaew'],
    ['white', 'wehti'],
    ['Assert', 'Atsrse'],
    ['Hello world!', 'H!edlllroo w'],
    [
      'You have chosen to translate this kata.',
      'Y.oaut ahka vsei hcth oesteanl stnoa rt'
    ]
  ];
  const decodeFixtures: [string, string][] = [
    ['csordaew', 'codewars'],
    ['wehti', 'white'],
    ['Atsrse', 'Assert'],
    ['H!edlllroo w', 'Hello world!'],
    [
      'Y.oaut ahka vsei hcth oesteanl stnoa rt',
      'You have chosen to translate this kata.'
    ]
  ];

  test.each(encodeFixtures)('should encode %s', (arg, res) => {
    expect(encode(arg)).toBe(res);
  });

  test.each(decodeFixtures)('should decode %s', (arg, res) => {
    expect(decode(arg)).toBe(res);
  });
});
