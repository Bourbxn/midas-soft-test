function getHandScore(input: string): number {
  let [h1, h2, h3]: string[] = input.split(" ");
  if (getRank(h1) === getRank(h2) && getRank(h2) === getRank(h3)) {
    if (getRank(h1) === 11) {
      return 35;
    }
    return 32.5;
  }
  if (getFace(h1) === getFace(h2) && getFace(h1) === getFace(h3)) {
    return getRank(h1) + getRank(h2) + getRank(h3);
  } else if (getFace(h1) === getFace(h2)) {
    return getRank(h1) + getRank(h2);
  } else if (getFace(h1) === getFace(h3)) {
    return getRank(h1) + getRank(h3);
  } else if (getFace(h2) === getFace(h3)) {
    return getRank(h2) + getRank(h3);
  }
  return 0;
}

function getFace(card: string): string {
  return card.charAt(0);
}

function getRank(card: string): number {
  if (card.substring(1) === "A") {
    return 11;
  } else if (
    card.substring(1) === "J" ||
    card.substring(1) === "Q" ||
    card.substring(1) === "K"
  ) {
    return 10;
  }
  return parseInt(card.substring(1));
}
