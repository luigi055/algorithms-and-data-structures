function matchElementsSumHead(arr) {
  if (arr === undefined) return -1
  if (arr.length <= 1) return -1

  const [toCompare, ...numbers] = arr
  let left = 0;
  let right = numbers.length - 1;
  let result = ""

  while (left <= right) {
    if (numbers[left] + numbers[right] === toCompare) {
      const pairInString = ` ${numbers[left]},${numbers[right]}`

      result += !result.includes(pairInString) ? pairInString : ""
      right--
    } else if (right === left) {
      right = numbers.length - 1;
      left++
    }  else {
      right--
    }
  }

  return result === "" ? -1 : result.trim();
}

export default matchElementsSumHead
