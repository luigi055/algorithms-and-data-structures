const isNumber = number => typeof number === "number";
const isPlainObject = value =>
  typeof value === "object" && !Array.isArray(value) && value !== null;

function stringifyNumbers(object) {
  const ObjectParameter = {};

  for (const key in object) {
    const property = object[key];

    if (isPlainObject(property)) {
      ObjectParameter[key] = stringifyNumbers(property);
    } else if (isNumber(property)) {
      ObjectParameter[key] = property.toString();
    } else {
      ObjectParameter[key] = property;
    }
  }
  return ObjectParameter;
}

export default stringifyNumbers;
