function capitalizeWords(words) {
  if (words.length === 0) return [];
  const capitalizedFirstWord = words[0].toUpperCase();

  return [capitalizedFirstWord, ...capitalizeWords(words.slice(1))];
}

export default capitalizeWords;
