function sumZero(numbers = []) {
  if (numbers.length === 0) return [];
  let left = 0;
  let right = numbers.length - 1;
  const fallback = [];

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === 0) {
      return [numbers[left], numbers[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return fallback;
}

export default sumZero;
