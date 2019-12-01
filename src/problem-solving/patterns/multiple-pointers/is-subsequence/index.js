function isSubsequence(string, stringToCompare) {
  var left = 0;
  var right = 0;

  if (!string) return true;
  while (right < stringToCompare.length) {
    if (stringToCompare[right] === string[left]) left++;
    if (left === string.length) return true;
    right++;
  }
  return false;
}

export default isSubsequence;
