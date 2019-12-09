import fibonacci from "./index";

describe("test fibonacci function", () => {
  it("should return 3 when calculate the fibonacci number of 4", () => {
    expect(fibonacci(4)).toBe(3);
  });

  it("should return 14930352 when calculate the fibonacci number of 36", () => {
    expect(fibonacci(36)).toBe(14930352);
  });

  it("should return 55 when calculate the fibonacci number of 10", () => {
    expect(fibonacci(10)).toBe(55);
  });
});
