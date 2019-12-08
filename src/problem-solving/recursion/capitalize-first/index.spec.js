import capitalizeFirst from "./index";

describe("testing capitalizeFirst function", () => {
  it("should capitalize to Paco and July", () => {
    expect(capitalizeFirst(["paco", "july"])).toEqual(["Paco", "July"]);
  });

  it("should capitalize to Apple, Pear and Banana", () => {
    expect(capitalizeFirst(["apple", "pear", "banana"])).toEqual([
      "Apple",
      "Pear",
      "Banana"
    ]);
  });
});
