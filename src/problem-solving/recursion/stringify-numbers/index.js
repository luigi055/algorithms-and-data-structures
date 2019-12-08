const isNumber = number => typeof number === "number";

function stringifyNumbers(object) {
  const ObjectParameter = JSON.parse(JSON.stringify(object));
  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    const item = keys[i];
    const property = ObjectParameter[item];

    if (typeof property === "object") {
      ObjectParameter[item] = stringifyNumbers(ObjectParameter[item]);
    } else if (isNumber(ObjectParameter[item])) {
      ObjectParameter[item] = ObjectParameter[item].toString();
    }
  }
  return ObjectParameter;
}

export default stringifyNumbers;
