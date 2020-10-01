function matchElementsSumHead(array = []) {
  if (array === undefined) return -1
  if (array.length <= 1) return -1

  const [toCompare, ...numbers] = array
  let left = 0;
  let right = numbers.length - 1;
  let result = "";

  while (left < array.length-1) {
    let sum = numbers[left] + numbers[right];
    if (right === left) {
      left++;
      right = numbers.length-1
    } else if (sum === toCompare) {
      result += ` ${numbers[left]},${numbers[right]}`
      right--;
    } else  {
      right--
    }

  }

  return result === "" ? -1 : result.trim();
}

export default matchElementsSumHead
