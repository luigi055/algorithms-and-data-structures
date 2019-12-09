const isObject = value => typeof value === "object" && value !== null;
const isArray = value => Array.isArray(value);
const isPlainObject = value => isObject(value) && !isArray(value);

function deepClone(object) {
  const cloned = {};
  for (const key in object) {
    const item = object[key];
    if (isPlainObject(item)) {
      cloned[key] = deepClone(item);
    } else if (isArray(item)) {
      const temporalArray = item.map(listItem => {
        let arrayItem;
        if (isPlainObject(listItem)) {
          return deepClone(listItem);
        } else {
          return listItem;
        }
      });

      cloned[key] = temporalArray;
    } else {
      cloned[key] = item;
    }
  }

  return cloned;
}

export default deepClone;
