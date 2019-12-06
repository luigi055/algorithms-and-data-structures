import minSubArrayLen from "./index";

describe("Testing minSubarrayLn Function", () => {
  it("should return 2 when calculate the consecutive numbers of the arry is equal or greater than 7", () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
  });

  it("should return 3 when calculate the consecutive numbers of the array is equal or greater than 39", () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
  });

  it("should return 2 when calculate the consecutive numbers of the array is equal or greater than 9", () => {
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
  });

  it("should return 1 when calculate the consecutive numbers of the array is equal or greater than 52", () => {
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
  });

  it("should return 5 when calculate the consecutive numbers of the array is equal or greater than 55", () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
  });

  it("should return 2 when calculate the consecutive numbers of the array is equal or greater than 11", () => {
    expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
  });

  it("should return 0 when calculate the consecutive numbers of the array is equal or greater than 95", () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
  });
});
