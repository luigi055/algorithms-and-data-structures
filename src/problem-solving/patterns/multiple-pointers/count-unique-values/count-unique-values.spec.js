import countUniqueValues from "./count-unique-values";

describe("Testing countUniqueValues function using multiple pointer problem solving pattern", () => {
  it("should return 2 unique values when this array: [2, 2, 2, 2, 2, 3, 3, 3] is sent", () => {
    const mockArgument = [2, 2, 2, 2, 2, 3, 3, 3];
    const expectedOutput = 2;

    expect(countUniqueValues(mockArgument)).toEqual(expectedOutput);
  });

  it("should return 4 unique values when this array: [1, 1, 1, 1, 1, 3, 3, 3, 3, 4, 6] is sent", () => {
    const mockArgument = [1, 1, 1, 1, 1, 3, 3, 3, 3, 4, 6];
    const expectedOutput = 4;

    expect(countUniqueValues(mockArgument)).toEqual(expectedOutput);
  });

  it("should return 0 unique values when this array: [] is sent", () => {
    const mockArgument = [];
    const expectedOutput = 0;

    expect(countUniqueValues(mockArgument)).toEqual(expectedOutput);
  });

  it("should return 5 unique values when this array: [-3, -2, -1, 0, 6] is sent", () => {
    const mockArgument = [-3, -2, -1, 0, 6];
    const expectedOutput = 5;

    expect(countUniqueValues(mockArgument)).toEqual(expectedOutput);
  });
});
