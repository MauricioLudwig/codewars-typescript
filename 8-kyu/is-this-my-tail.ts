export const correctTail = (body: string, tail: string): boolean =>
  tail === body.substring(body.length - 1);
