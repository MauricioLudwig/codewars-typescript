export const buildString = (...template: string[]): string =>
  `I like ${template.join(', ')}!`;
