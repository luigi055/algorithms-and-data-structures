const addNextInterval = (number, interval = 0) => {
  const intervalToAdd = interval === 0 ? 1 : interval;
  const tens = number % 100;
  const numberWithATenRemoved = number - tens;
  const lastUnit = interval - (number % intervalToAdd);

  return numberWithATenRemoved + tens + lastUnit;
};

const addIntervalOf10 = number => addNextInterval(number, 10);

function solution(minimumNumber) {
  const isMinimunNumberCero = minimumNumber === 0;
  const maximumNumber = 1000000000;
  const isInputANumber = typeof minimumNumber !== "number";

  if (isInputANumber) {
    throw new Error("Only numbers are allowed");
  }
  if (isMinimunNumberCero) {
    throw new Error(
      `Input number should be greater than 0 and not greater than ${maximumNumber}`
    );
  }

  const compensateMinAndMaxNumbers = maximumNumber - minimumNumber;
  const randomNumber = Math.random();
  const compensatedRandomNumber = randomNumber * compensateMinAndMaxNumbers;
  const floorRandomNumber = Math.floor(compensatedRandomNumber) + minimumNumber;

  return addIntervalOf10(floorRandomNumber);
}

console.log(solution(999999950));
