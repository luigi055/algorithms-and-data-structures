import isAveragePair from "./index";

describe("Testing isAveragePair function", () => {
  it("should return true if average of 1 and 1 is 1", () => {
    expect(isAveragePair([1, 1], 1)).toBe(true);
  });

  it("should return true if average of 1,2,3 is 2.5", () => {
    expect(isAveragePair([1, 2, 3], 2.5)).toBe(true);
  });

  it("should return true if average of 1,3,3,5,6,7,10,12,19 is 8", () => {
    expect(isAveragePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
  });

  it("should return false if average of -1,0,3,4,5,6 is 4.1", () => {
    expect(isAveragePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
  });

  it("should return false if average of empty array is 4", () => {
    expect(isAveragePair([], 4)).toBe(false);
  });

  it("should return true if average of 1 and 2 is 1.5", () => {
    expect(isAveragePair([1, 2], 1.5)).toBe(true);
  });

  it("should return false if average of 1 and 2 is 1", () => {
    expect(isAveragePair([1, 2], 1)).toBe(false);
  });
});
