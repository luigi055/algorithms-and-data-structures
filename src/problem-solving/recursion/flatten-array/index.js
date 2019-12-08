function flattenArray(array) {
  const flatten = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const isItemAnArray = Array.isArray(item);
    if (isItemAnArray) {
      flatten.push(...flattenArray(item));
    } else {
      flatten.push(item);
    }
  }

  return flatten;
}

export default flattenArray;
