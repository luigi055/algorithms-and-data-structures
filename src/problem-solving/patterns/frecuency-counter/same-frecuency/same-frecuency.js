const numberToArray = numberInt => numberInt.toString().split("");
const addTo = (base, addend) => (base || 0) + addend;
const addOneTo = number => addTo(number, 1);

const sameFrequency = (number, numberToCompare) => {
  const numbers = numberToArray(number);
  const numbersToCompare = numberToArray(numberToCompare);
  const hasParametersSameLength = numbers.length !== numbersToCompare.length;
  const numberFrequencyCounter = {};

  if (hasParametersSameLength) {
    return false;
  }

  for (const isolatedNumber of numbers) {
    numberFrequencyCounter[isolatedNumber] = addOneTo(
      numberFrequencyCounter[isolatedNumber]
    );
  }

  for (const isolatedNumber of numbersToCompare) {
    const hasThisNumber = numberFrequencyCounter[isolatedNumber];
    if (!hasThisNumber) {
      return false;
    } else {
      numberFrequencyCounter[isolatedNumber] -= 1;
    }
  }

  return true;
};

export default sameFrequency;
