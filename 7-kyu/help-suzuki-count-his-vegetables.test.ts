import { countVegetables } from './help-suzuki-count-his-vegetables';

test('should return tuple of expected values', () => {
  const expectation = [
    [2, 'tofu'],
    [2, 'potato'],
    [2, 'cucumber'],
    [2, 'cabbage'],
    [1, 'turnip'],
    [1, 'pepper'],
    [1, 'onion'],
    [1, 'mushroom'],
    [1, 'celery'],
    [1, 'carrot']
  ];

  const arg =
    'potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage';

  expect(countVegetables(arg)).toEqual(expectation);
});
