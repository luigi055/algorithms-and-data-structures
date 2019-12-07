function findLongestSubstring(string) {
  let longestSlideLength = 0;
  let startSlide = 0;
  let seenCharacter = {};

  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    const hasCharacter = !!seenCharacter[character];
    if (hasCharacter) {
      const foundCharacter = seenCharacter[character];
      startSlide = Math.max(startSlide, foundCharacter);
    }
    const basedOneIterator = i + 1;
    const slideLength = basedOneIterator - startSlide;

    longestSlideLength = Math.max(longestSlideLength, slideLength);

    seenCharacter[character] = basedOneIterator;
  }

  return longestSlideLength;
}

export default findLongestSubstring;
