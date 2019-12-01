const countUniqueValues = numbers => {
  let countValue = 0;
  const isEmptyArray = numbers.length === 0;
  if (isEmptyArray) return 0;

  for (let number = 1; number < numbers.length; number++) {
    const areDifferentValues = numbers[countValue] !== numbers[number];
    if (areDifferentValues) {
      countValue++;
      numbers[countValue] = numbers[number];
    }
  }

  const baseZeroCountValueCompensated = countValue + 1;

  return baseZeroCountValueCompensated;
};

export default countUniqueValues;
