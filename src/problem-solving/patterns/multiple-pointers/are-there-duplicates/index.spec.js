import areThereDuplicates from "./index";

describe("Test areThereDuplicates function", () => {
  it("should return false when try to check if in the following arguments are duplicate values 1,a", () => {
    expect(areThereDuplicates(1, "a")).toBe(false);
  });

  it("should return true when try to check if there are duplicated values in the following arguments 1,'a', 'b', 'c', 'a', 3", () => {
    expect(areThereDuplicates(1, "a", "b", "c", "a", 3)).toBe(true);
  });

  it("should return false when pass in no arguments", () => {
    expect(areThereDuplicates()).toBe(false);
  });
});
