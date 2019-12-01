import isSubsequence from "./index";

describe("Testing isSubsequence function", () => {
  it("should return true when check if hello is subsequent of hello world", () => {
    expect(isSubsequence("hello", "hello world")).toBe(true);
  });

  it("should return true when check if sing is subsequent of sting", () => {
    expect(isSubsequence("sing", "sting")).toBe(true);
  });

  it("should return true when check if abc is subsequent of abracadabra", () => {
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });

  it("should return false when check if abc is subsequent of acb", () => {
    expect(isSubsequence("abc", "acb")).toBe(false);
  });
});
