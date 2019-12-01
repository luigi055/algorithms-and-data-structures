import sameFrequency from "./same-frecuency";

describe("Testing sameFrecuency", () => {
  it("should be true when evaluate 111 and 111", () => {
    expect(sameFrequency(111, 111)).toBe(true);
  });

  it("should be false when evaluate 11 and 111", () => {
    expect(sameFrequency(11, 111)).toBe(false);
  });

  it("should be true when evaluate 182 and 281", () => {
    expect(sameFrequency(182, 281)).toBe(true);
  });

  it("should be false when evaluate 34 and 14", () => {
    expect(sameFrequency(34, 14)).toBe(false);
  });

  it("should be true when evaluate 3589578 and 5879385", () => {
    expect(sameFrequency(3589578, 5879385)).toBe(true);
  });
});
