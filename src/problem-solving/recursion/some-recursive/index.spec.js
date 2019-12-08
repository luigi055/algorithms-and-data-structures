import recursiveOperation from "./index";
const isOdd = val => val % 2 !== 0;

describe("Testing recursiveOpertion function", () => {
  it("should return true when one of the numbers in the array is odd", () => {
    expect(recursiveOperation([1, 2, 3, 4], isOdd)).toBe(true);
  });

  it("should return true when one of the numbers in the array is odd", () => {
    expect(recursiveOperation([4, 6, 8, 9], isOdd)).toBe(true);
  });

  it("should return false when one of the numbers in the array is not odd", () => {
    expect(recursiveOperation([4, 6, 8], isOdd)).toBe(false);
  });

  it("should return false when one of the numbers in the array is bigger than 10", () => {
    expect(recursiveOperation([4, 6, 8], val => val > 10)).toBe(false);
  });
});
