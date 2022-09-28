export const humanReadable = (seconds: number): string => {
  let h = 0,
    m = 0,
    s = 0,
    currentSeconds = seconds;

  for (let i = 99; i > 0; i--) {
    if (currentSeconds >= i * 3600) {
      h = i;
      currentSeconds -= i * 3600;
      break;
    }
  }

  for (let i = 59; i > 0; i--) {
    if (currentSeconds >= i * 60) {
      m = i;
      currentSeconds -= i * 60;
      break;
    }
  }

  s = currentSeconds;

  return [h, m, s].map((o) => (o < 10 ? `0${o}` : o)).join(':');
};
