import deepClone from "./index";

describe("testing deepClone", () => {
  it("should return an empty object", () => {
    expect(deepClone({})).toEqual({});
  });

  it("should clone a basic object", () => {
    const objectA = { a: "a" };
    const obecj = Object.assign(objectA);

    expect(deepClone(objectA) === objectA).toBe(false);
    expect(deepClone(objectA).a).toEqual(objectA.a);
  });

  test("cloned object should not be equal to the original one", () => {
    const objectA = { a: "a" };
    const objectB = deepClone(objectA);

    objectB.a = "b";

    expect(objectB).not.toEqual(objectA);
  });

  it("should deep clone with array in a property", () => {
    const objectA = { a: "a", b: { bb: "b" }, c: [{ cc: "c" }] };

    expect(objectA === deepClone(objectA)).toBe(false);
    expect(deepClone(objectA)).toEqual({
      a: "a",
      b: { bb: "b" },
      c: [{ cc: "c" }]
    });
  });

  it("should deep clone with array in a property", () => {
    const objectA = {
      a: "a",
      b: { bb: "b" },
      c: [{ cc: "c" }],
      d: [{ e: "e" }]
    };

    expect(objectA === deepClone(objectA)).toBe(false);
    expect(deepClone(objectA)).toEqual({
      a: "a",
      b: { bb: "b" },
      c: [{ cc: "c" }],
      d: [{ e: "e" }]
    });
  });
});
