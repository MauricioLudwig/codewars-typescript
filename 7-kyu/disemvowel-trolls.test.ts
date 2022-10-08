import { Kata } from './disemvowel-trolls';

describe('test suites for disemvowel-trolls kata', () => {
  test('should return ""Ths wbst s fr !"', () => {
    expect(Kata.disemvowel('This website is for you!')).toBe(
      'Ths wbst s fr y!'
    );
  });
});
