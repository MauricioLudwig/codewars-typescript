export function isValidCoordinates(coordinates: string): boolean {
  const [lat = NaN, long = NaN] = coordinates
    .split(', ')
    .filter((o) => !o.includes('e'))
    .map(Number);

  if (isNaN(lat) || isNaN(long)) {
    return false;
  }

  return lat >= -90 && lat <= 90 && long >= -180 && long <= 180;
}
