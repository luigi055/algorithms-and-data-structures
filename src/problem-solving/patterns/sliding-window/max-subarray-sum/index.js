function maxSubarraySum(numbers, numberConsecutiveSum) {
  if (numberConsecutiveSum > numbers.length) return null;

  let maxSum = 0;
  let temporalSum = 0;

  for (
    let firstIterations = 0;
    firstIterations < numberConsecutiveSum;
    firstIterations++
  ) {
    maxSum += numbers[firstIterations];
  }

  temporalSum = maxSum;

  for (let i = numberConsecutiveSum; i < numbers.length; i++) {
    const lastNumberFromPreviousSlide = numbers[i - numberConsecutiveSum];
    const currentNumber = numbers[i];
    temporalSum = temporalSum - lastNumberFromPreviousSlide + currentNumber;
    maxSum = Math.max(maxSum, temporalSum);
  }

  return maxSum;
}

export default maxSubarraySum;
