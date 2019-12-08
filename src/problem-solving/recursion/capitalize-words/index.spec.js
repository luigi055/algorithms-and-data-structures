import capitalizeWords from "./index";

describe("testing capitalizeWords function", () => {
  it("should capitalize to PACO and JULY", () => {
    expect(capitalizeWords(["paco", "july"])).toEqual(["PACO", "JULY"]);
  });

  it("should capitalize to APPLE, PEAR and BANANA", () => {
    expect(capitalizeWords(["apple", "pear", "banana"])).toEqual([
      "APPLE",
      "PEAR",
      "BANANA"
    ]);
  });
});
