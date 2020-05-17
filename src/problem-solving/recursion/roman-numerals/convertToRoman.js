import romanNumberMap from "./arabic-roman-map";

const mapNumbersWithRoman = (arrayOfNumber) => {
  if (arrayOfNumber.length === 0) return "";

  const firstNumber = arrayOfNumber[0];
  const rest = arrayOfNumber.slice(1);

  return mapNumbersWithRoman(rest) + romanNumberMap[firstNumber];
};

function convertToRoman(arabicNumber) {
  const numberToArrayString = arabicNumber.toString().split("");
  const numbersToMapArray = numberToArrayString
    .reverse()
    .map((number, index) => number * 10 ** index);

  const converted = mapNumbersWithRoman(numbersToMapArray);

  return converted;
}

export default convertToRoman;
