const getDigit = (number, digitPosition) =>
  Math.floor(Math.abs(number) / 10 ** digitPosition) % 10;

const countDigit = number => (number === 0)
  ? 1 
  : Math.ceil(Math.log10(Math.abs(number)))

const getMostDigits =
  (numbers) => countDigit(numbers.reduce((prev, curr) => Math.max(prev,curr)))

function radixSort(numbers) {
  let maxDigitCount = getMostDigits(numbers);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < numbers.length; i++) {
      let digit = getDigit(numbers[i],k)
      digitBuckets[digit].push(numbers[i])
    }
    numbers = [].concat(...digitBuckets)
  }
  return numbers;
}

export default radixSort;