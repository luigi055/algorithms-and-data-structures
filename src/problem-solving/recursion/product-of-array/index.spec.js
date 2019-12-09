import productOfArray from "./index";

describe("testing productOfArray function", () => {
  it("should return 6 when the function takes in [1,2,3] as argument", () => {
    expect(productOfArray([1, 2, 3])).toBe(6);
  });

  it("should return 60 when the function takes in [1,2,3,10] as argument", () => {
    expect(productOfArray([1, 2, 3, 10])).toBe(60);
  });
});
