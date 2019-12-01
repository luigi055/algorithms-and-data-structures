// ONE LINE ALTERNATIVE
// const areThereDuplicates = (...argumentsList) =>
//   new Set(argumentsList).size !== argumentsList.length;

const addTo = (base, addend) => (base || 0) + addend;
const addOneTo = number => addTo(number, 1);
const isEmptyArray = array => array.length === 0;

const areThereDuplicates = (...argumentsList) => {
  if (isEmptyArray(argumentsList)) return false;
  const argumentsFrequencyCounter = {};

  for (const argument of argumentsList) {
    argumentsFrequencyCounter[argument] = addOneTo(
      argumentsFrequencyCounter[argument]
    );
  }

  for (const argument in argumentsFrequencyCounter) {
    const hasRepeatedArgument = argumentsFrequencyCounter[argument] > 1;

    if (hasRepeatedArgument) {
      return true;
    }
  }

  return false;
};

export default areThereDuplicates;
