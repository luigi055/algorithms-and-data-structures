function productOfArray(numbers) {
  if (numbers.length === 0) return 1;

  return numbers[0] * productOfArray(numbers.slice(1));
}

export default productOfArray;
