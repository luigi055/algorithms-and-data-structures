import matchElementsSumHead from './index';

describe("Testing matchElementsSumHead function" , () => {
  it.each([
    [undefined, -1],
    [[], -1],
    [[5], -1],
  ])("should return -1 when neither of the numbers in the tail of the array subtract the head", (arr, expected) => {
    expect(matchElementsSumHead(arr)).toEqual(expected);
  });

  it.each([
    [[7, 6, 4, 1, 7, -2, 3, 12], "6,1 4,3"],
    [[17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7], "6,11 10,7 15,2"],
  ])("should subtract all combination of %s and all the values that sums the head of the array are %s", (arr, expected) => {
    expect(matchElementsSumHead(arr)).toEqual(expected);
  });
})