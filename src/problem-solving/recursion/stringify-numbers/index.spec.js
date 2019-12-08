import stringifyNumbers from "./index";

describe("testing stringifyNumbers function", () => {
  it("should convert every number in the object in string", () => {
    const obj = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 2 }, ee: "car" }
    };

    const expected = {
      a: "2",
      b: { b: "2", bb: { b: "3", bb: { b: "2" } } },
      c: { c: { c: "2" }, cc: "ball", ccc: "5" },
      d: "1",
      e: { e: { e: "2" }, ee: "car" }
    };

    expect(stringifyNumbers(obj)).toEqual(expected);
  });
});
