function isAveragePair(numbers, average) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const pairAveraged = (numbers[left] + numbers[right]) / 2;
    const isSameAverage = pairAveraged === average;
    const isLastLookUp = right - left === 1;

    if (isSameAverage) {
      return true;
    } else if (isLastLookUp) {
      right--;
      left = 0;
    } else {
      left++;
    }
  }

  return false;
}

export default isAveragePair;
