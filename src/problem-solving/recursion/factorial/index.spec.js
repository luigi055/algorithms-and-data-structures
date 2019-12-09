import factorial from "./index";

describe("testing factorial function", () => {
  it("should return 24 when calculate the factorial of 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return 1 when calculate the factorial of 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 0 when calculate the factorial of 0", () => {
    expect(factorial(0)).toBe(0);
  });

  it("should return 4 when calculate the factorial of 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 5040 when calculate the factorial of 7", () => {
    expect(factorial(7)).toBe(5040);
  });
});
