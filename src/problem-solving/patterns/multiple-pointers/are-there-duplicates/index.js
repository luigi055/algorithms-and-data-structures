// ONE LINE ALTERNATIVE
// const areThereDuplicates = (...argumentsList) =>
//   new Set(argumentsList).size !== argumentsList.length;

function areThereDuplicates(...argumentsList) {
  argumentsList.sort();
  const sortedArguments = argumentsList;
  let start = 0;
  let next = 1;

  while (next < sortedArguments.length) {
    const hasTheSameArgument = sortedArguments[start] === sortedArguments[next];
    if (hasTheSameArgument) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

export default areThereDuplicates;
