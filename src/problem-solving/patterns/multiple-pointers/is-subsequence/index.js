function isSubsequence(string, stringToCompare) {
  let left = 0;
  let right = 0;

  if (!string) return true;
  while (right < stringToCompare.length) {
    if (stringToCompare[right] === string[left]) left++;
    if (left === string.length) return true;
    right++;
  }
  return false;
}

export default isSubsequence;
