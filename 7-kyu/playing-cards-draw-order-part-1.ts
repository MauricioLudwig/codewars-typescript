export const draw = (deck: string[]): string[] => {
  const drawnCards: string[] = [];
  const deckCopy = [...deck];

  while (deckCopy.length > 0) {
    const card1 = deckCopy.shift();

    if (!card1) {
      throw new Error('No card found');
    }

    drawnCards.push(card1);

    const card2 = deckCopy.shift();

    if (!card2) {
      continue;
    }

    deckCopy.push(card2);
  }

  return drawnCards;
};
