export function isValidCoordinates(coordinates: string): boolean {
  const [lat = NaN, long = NaN] = coordinates
    .split(', ')
    .filter((o) => !o.includes('e'))
    .map(Number);

  if (lat === Number.NaN || long === Number.NaN) {
    return false;
  }

  return lat >= -90 && lat <= 90 && long >= -180 && long <= 180;
}
