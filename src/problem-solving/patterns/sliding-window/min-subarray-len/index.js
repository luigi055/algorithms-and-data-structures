function minSubArrayLen(numbers, numberToCompare) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while (start < numbers.length) {
    const isTotalSmallerThanNumberToCompare = total < numberToCompare;
    const isNumbersLengthSmallerThanEnd = end < numbers.length;
    const isLessThanNumberToCompare =
      isTotalSmallerThanNumberToCompare && isNumbersLengthSmallerThanEnd;
    const isLargerThanOrEqualToNumberToCompare = total >= numberToCompare;

    if (isLessThanNumberToCompare) {
      total += numbers[end];
      end++;
    } else if (isLargerThanOrEqualToNumberToCompare) {
      minLength = Math.min(minLength, end - start);
      total -= numbers[start];
      start++;
    } else {
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

export default minSubArrayLen;
