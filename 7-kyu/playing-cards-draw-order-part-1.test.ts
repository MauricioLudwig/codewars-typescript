import { draw } from './playing-cards-draw-order-part-1';

test('should return the correct pick order', () => {
  const deck = ['KC', 'KH', 'QC', 'KS', 'KD', 'QH', 'QD', 'QS'];
  const drawn = ['KC', 'QC', 'KD', 'QD', 'KH', 'QH', 'KS', 'QS'];

  expect(draw(deck)).toEqual(drawn);
});
