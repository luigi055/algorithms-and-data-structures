import power from "./index";

describe("testing power function", () => {
  it("should return 16 when 4 is exponent of 2", () => {
    expect(power(2, 4)).toBe(16);
  });

  it("should return 512 when 3 is exponent of 8", () => {
    expect(power(8, 3)).toBe(512);
  });

  it("should return 512 when 5 is exponent of 6", () => {
    expect(power(6, 5)).toBe(7776);
  });
});
