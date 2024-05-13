export function bestFriend(txt: string, a: string, b: string): boolean {
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === a && txt[i + 1] !== b) {
      return false;
    }
  }

  return true;
}
