const isEven = number => number % 2 === 0;
const isNumber = number => typeof number === "number";
const isNumberEven = number => isEven(number) && isNumber(number);

function nestedEvenSum(object) {
  let accumulator = 0;
  const keys = Object.keys(object);
  if (keys.length === 0) return 0;

  for (let i = 0; i < keys.length; i++) {
    const item = keys[i];
    const property = object[item];

    if (typeof property === "object") {
      accumulator += nestedEvenSum(property);
    } else if (isNumberEven(property)) {
      accumulator += property;
    }
  }
  return accumulator;
}

export default nestedEvenSum;
