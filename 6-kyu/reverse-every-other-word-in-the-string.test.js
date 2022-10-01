import { reverse } from './reverse-every-other-word-in-the-string';

describe('test suites for reverse-every-other-word-in-the-string kata', () => {
  test('should reverse string (1)', () => {
    expect(reverse('Reverse this string, please!')).toBe(
      'Reverse siht string, !esaelp'
    );
  });

  test('should reverse string (2)', () => {
    expect(reverse("I really don't like reversing strings!")).toBe(
      "I yllaer don't ekil reversing !sgnirts"
    );
  });
});
