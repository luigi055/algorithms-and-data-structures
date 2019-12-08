function reverse(string) {
  if (string.length === 0) return "";
  const firstLetter = string[0];
  const rest = string.slice(1);

  const reversedString = reverse(rest) + firstLetter;

  return reversedString;
}

export default reverse;
