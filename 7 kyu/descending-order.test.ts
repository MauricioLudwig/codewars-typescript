import { descendingOrder } from './descending-order';

test('should return some sample numbers in descending order', () => {
  [
    [42145, 54421],
    [145263, 654321],
    [123456789, 987654321],
  ].forEach(([n1, n2]) => {
    expect(descendingOrder(n1!)).toEqual(n2!);
  });
});
