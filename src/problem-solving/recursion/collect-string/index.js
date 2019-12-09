const isPlainObject = value =>
  typeof value === "object" && !Array.isArray(value) && value !== null;
const isString = value => typeof value === "string";

function collectStrings(object) {
  const ObjectParameter = {};
  const collector = [];

  for (const key in object) {
    const property = object[key];

    if (isPlainObject(property)) collector.push(...collectStrings(property));
    else if (isString(property)) collector.push(property);
  }
  return collector;
}

export default collectStrings;
