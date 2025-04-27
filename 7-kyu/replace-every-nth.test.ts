import { replaceNth } from './replace-every-nth';

describe('should test replaceNth fn', () => {
  const fixtures: [string, string, number, string, string][] = [
    [
      'Vader soid: No, I am your fother!',
      'Vader said: No, I am your father!',
      2,
      'a',
      'o'
    ],
    [
      'Vader said: No, I am your fother!',
      'Vader said: No, I am your father!',
      4,
      'a',
      'o'
    ],
    [
      'Vader said: No, I am your father!',
      'Vader said: No, I am your father!',
      6,
      'a',
      'o'
    ],
    [
      'Vader said: No, I am your father!',
      'Vader said: No, I am your father!',
      0,
      'a',
      'o'
    ],
    [
      'Vader said: No, I am your father!',
      'Vader said: No, I am your father!',
      -2,
      'a',
      'o'
    ],
    [
      'Vader sayd: No, I am your father!',
      'Vader said: No, I am your father!',
      1,
      'i',
      'y'
    ],
    [
      'Luke cries: Noooooioooooioooo!',
      'Luke cries: Noooooooooooooooo!',
      6,
      'o',
      'i'
    ]
  ];

  test.each(fixtures)('', (res, text, n, oldValue, newValue) => {
    expect(replaceNth(text, n, oldValue, newValue)).toBe(res);
  });
});
