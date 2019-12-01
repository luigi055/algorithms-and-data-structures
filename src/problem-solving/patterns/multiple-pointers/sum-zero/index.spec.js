import sumZero from "./index";

describe("Testing sumZero function", () => {
  it("should [-2,2] since this sums 0", () => {
    expect(sumZero([-2, -1, 0, 1, 2])).toEqual([-2, 2]);
  });

  it("should return empty string when there is no argument passed in", () => {
    expect(sumZero()).toEqual([]);
  });

  it("should return empty string when pass in an empty array", () => {
    expect(sumZero([])).toEqual([]);
  });

  it("should return [] when there is not pair that return 0", () => {
    expect(sumZero([-2, -1, 3, 6])).toEqual([]);
  });
});
