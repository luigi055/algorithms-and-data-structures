import flattenArray from "./index";

describe("Tetsing flattenArray function", () => {
  it("should return an array of 1,2,3,4,5 when pass in an array like this [1,2,3,[4,5]]", () => {
    expect(flattenArray([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it("should return an array of 1,2,3,4,5 when pass in an array like this [1,[2,[3,4],[5]]]", () => {
    expect(flattenArray([1, [2, [3, 4], [5]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an array of 1,2,3 when pass in an array like this [[1],[2],[3]]", () => {
    expect(flattenArray([[1], [2], [3]])).toEqual([1, 2, 3]);
  });

  it("should return an array of 1,2,3 when pass in an array like this [[[[1]]], [[2]], [3]]", () => {
    expect(flattenArray([[[[1]]], [[2]], [3]])).toEqual([1, 2, 3]);
  });
});
