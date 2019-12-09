import recursiveRange from "./index";

describe("testing recursiveRange function", () => {
  it("should return 55 when calculate the range of 10", () => {
    expect(recursiveRange(10)).toBe(55);
  });

  it("should return 21 when calculate the range of 6", () => {
    expect(recursiveRange(6)).toBe(21);
  });
});
