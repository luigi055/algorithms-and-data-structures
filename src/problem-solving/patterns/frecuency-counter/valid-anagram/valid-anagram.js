const isKeyExistInObject = (key, object) => key in object;
const addTo = (base, addend) => (base || 0) + addend;
const addOneTo = number => addTo(number, 1);

function isValidAnagram(word, wordToCompare) {
  const hasParametersDifferentLength = word.length !== wordToCompare.length;
  const wordFrequencyCounter = {};

  if (hasParametersDifferentLength) {
    return false;
  }

  for (const character of word) {
    wordFrequencyCounter[character] = addOneTo(wordFrequencyCounter[character]);
  }

  for (const letter of wordToCompare) {
    const hasThisLetter = wordFrequencyCounter[letter];
    if (!hasThisLetter) {
      return false;
    } else {
      wordFrequencyCounter[letter] -= 1;
    }
  }

  return true;
}

export default isValidAnagram;
