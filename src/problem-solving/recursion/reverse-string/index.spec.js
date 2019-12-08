import reverseString from "./index";

describe("Testing reverseString function", () => {
  it("should return emosewa when reverse awesome", () => {
    expect(reverseString("awesome")).toBe("emosewa");
  });

  it("should return loohcsmhtir when reverse rithmschool", () => {
    expect(reverseString("rithmschool")).toBe("loohcsmhtir");
  });
});
