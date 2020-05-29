const romanOne = "I";
const romanFive = "V";
const romanTen = "X";
const romanFifteen = "L";
const romanOneHundred = "C";
const romanFiveHundred = "D";
const romanOneThousand = "M";
const romanFiveThousand = "V̅";
const romanTenThousand = "X̅";

const romanNumberMap = {
  0: "",
  1: romanOne,
  2: romanOne + romanOne,
  3: romanOne + romanOne + romanOne,
  4: romanOne + romanFive,
  5: romanFive,
  6: romanFive + romanOne,
  7: romanFive + romanOne + romanOne,
  8: romanFive + romanOne + romanOne + romanOne,
  9: romanOne + romanTen,
  10: romanTen,
  20: romanTen + romanTen,
  30: romanTen + romanTen + romanTen,
  40: romanTen + romanFifteen,
  50: romanFifteen,
  60: romanFifteen + romanTen,
  70: romanFifteen + romanTen + romanTen,
  80: romanFifteen + romanTen + romanTen + romanTen,
  90: romanTen + romanOneHundred,
  100: romanOneHundred,
  200: romanOneHundred + romanOneHundred,
  300: romanOneHundred + romanOneHundred + romanOneHundred,
  400: romanOneHundred + romanFiveHundred,
  500: romanFiveHundred,
  600: romanFiveHundred + romanOneHundred,
  700: romanFiveHundred + romanOneHundred + romanOneHundred,
  800: romanFiveHundred + romanOneHundred + romanOneHundred + romanOneHundred,
  900: romanOneHundred + romanOneThousand,
  1000: romanOneThousand,
  2000: romanOneThousand + romanOneThousand,
  3000: romanOneThousand + romanOneThousand + romanOneThousand,
  4000: romanOneThousand + romanFiveThousand,
  5000: romanFiveThousand,
  6000: romanFiveThousand + romanOneThousand,
  7000: romanFiveThousand + romanOneThousand + romanOneThousand,
  8000:
    romanFiveThousand + romanOneThousand + romanOneThousand + romanOneThousand,
  9000: romanOneThousand + romanTenThousand,
  10000: romanTenThousand,
};

export default romanNumberMap;
