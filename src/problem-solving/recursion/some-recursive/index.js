function someRecursive(numbers, callback) {
  if (numbers.length === 0) return false;
  else if (callback(numbers[0]) === true) return true;
  else return someRecursive(numbers.slice(1), callback);
}

export default someRecursive;
