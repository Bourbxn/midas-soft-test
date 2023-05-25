function getQuestionPart(phrases: string[]): string[] {
  let phrasesAll: string[] = [];
  let phraseBase: string = phrases[0];
  for (let i = 2; i < phraseBase.length - 1; i++) {
    phrasesAll.push(phraseBase.substring(0, i));
    phrasesAll.push(phraseBase.substring(i));
  }
  phrasesAll.sort((a, b) => a.length - b.length);
  for (let i = phrasesAll.length - 1; i >= 0; i--) {
    let keyPhrase: string = phrasesAll[i];
    if (
      phrases[0].indexOf(keyPhrase) !== -1 &&
      phrases[1].indexOf(keyPhrase) !== -1 &&
      phrases[2].indexOf(keyPhrase) !== -1
    ) {
      for (let i = 0; i < 3; i++) {
        phrases[i] = getCutPhrase(phrases[i], keyPhrase);
      }
      break;
    }
  }
  return phrases;
}

function getCutPhrase(mainPhrase: string, keyPhrase: string): string {
  const startIndex = mainPhrase.indexOf(keyPhrase);
  let endIndex = startIndex + keyPhrase.length;
  return (
    mainPhrase.substring(0, startIndex) +
    mainPhrase.substring(endIndex).replace(" ", "")
  );
}
