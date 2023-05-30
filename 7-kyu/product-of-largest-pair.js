export function maxProduct(a) {
  let max = 0;
  let maxNr = a[0];

  for (let i = 1; i < a.length; i++) {
    const nextNr = a[i];
    const nextProduct = maxNr * nextNr;

    if (nextNr > maxNr) {
      maxNr = nextNr;
    }

    if (nextProduct > max) {
      max = nextProduct;
    }
  }

  return max;
}
