import { order } from './your-order-please';

test('Should correctly return words in the correct order', () => {
  const fixtures: [string, string][] = [
    ['is2 Thi1s T4est 3a', 'Thi1s is2 3a T4est'],
    ['4of Fo1r pe6ople g3ood th5e the2', 'Fo1r the2 g3ood 4of th5e pe6ople'],
  ];

  fixtures.forEach(([n1, n2]) => {
    expect(order(n1)).toBe(n2);
  });
});
