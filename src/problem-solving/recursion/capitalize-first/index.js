function capitalizeFirst(words) {
  if (words.length === 0) return [];
  const firstWord = words[0];
  const capitalizedFirstLetter = firstWord[0].toUpperCase();
  const restOfTheWord = firstWord.substring(1);
  const capitalizedWord = `${capitalizedFirstLetter}${restOfTheWord}`;

  return [capitalizedWord, ...capitalizeFirst(words.slice(1))];
}

export default capitalizeFirst;
