const isKeyExistInObject = (key, object) => key in object;
const addTo = (base, addend) => (base || 0) + addend;
const addOneTo = addend => addTo(addend, 1);

function isValidAnagram(word, wordToCompare) {
  const hasParametersDifferentLength = word.length !== wordToCompare.length;
  const wordFrequencyCounter = {};
  const wordToCompareFrequencyCounter = {};

  if (hasParametersDifferentLength) {
    return false;
  }

  for (const character of word) {
    wordFrequencyCounter[character] = addOneTo(wordFrequencyCounter[character]);
  }

  for (const character of wordToCompare) {
    wordToCompareFrequencyCounter[character] = addOneTo(
      wordToCompareFrequencyCounter[character]
    );
  }

  for (const wordKey in wordFrequencyCounter) {
    const isCharacterMatch =
      wordToCompareFrequencyCounter[wordKey] === wordFrequencyCounter[wordKey];

    if (!isKeyExistInObject(wordKey, wordToCompareFrequencyCounter)) {
      return false;
    }

    if (!isCharacterMatch) {
      return false;
    }
  }

  return true;
}

export default isValidAnagram;
