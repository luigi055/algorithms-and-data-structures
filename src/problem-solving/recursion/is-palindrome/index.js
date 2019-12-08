function isPalindrome(string) {
  const zeroBaseStringLength = string.length - 1;
  const firstCharacter = string[0];
  const lastCharacter = string[zeroBaseStringLength];
  const middleCharacters = string.substring(1, zeroBaseStringLength);
  const isSameCharacter = firstCharacter === lastCharacter;

  if (string.length <= 1) {
    return true;
  } else if (!isSameCharacter) {
    return false;
  }
  return isPalindrome(middleCharacters);
}

export default isPalindrome;
