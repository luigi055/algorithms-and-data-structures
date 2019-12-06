import maxSubarraySum from "./index";

describe("Testing maxSubarraySum function", () => {
  it("should return 10 when calculate the maximun sum between 2 consecutive numbers in the array", () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  });

  it("should return 17 when calculate the maximun sum between 4 consecutive numbers in the array", () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  });

  it("should return 6 when calculate the maximun sum between 1 consecutive numbers in the array", () => {
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
  });

  it("should return 13 when calculate the maximun sum between 4 consecutive numbers in the array", () => {
    expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
  });

  it("should return null when calculate the maximun sum between 4 consecutive numbers an empty array", () => {
    expect(maxSubarraySum([], 4)).toBe(null);
  });

  it("should return null when calculate the maximun sum between 3 consecutive numbers of an array with less than 3 items", () => {
    expect(maxSubarraySum([2, 4], 4)).toBe(null);
  });
});
