import findLongestSubstring from "./index";

describe("Test findLongestSubString function", () => {
  it("should return 0 when try to find the longest substring of an empty string", () => {
    expect(findLongestSubstring("")).toBe(0);
  });

  it('should return 7 when try to find the longest substring of "rithmschool"', () => {
    expect(findLongestSubstring("rithmschool")).toBe(7);
  });

  it('should return 8 when try to find the longest substring of "longestsubstring"', () => {
    expect(findLongestSubstring("longestsubstring")).toBe(8);
  });

  it('should return 6 when try to find the longest substring of "thisisawesome"', () => {
    expect(findLongestSubstring("thisisawesome")).toBe(6);
  });

  it('should return 7 when try to find the longest substring of "thecatinthehat"', () => {
    expect(findLongestSubstring("thecatinthehat")).toBe(7);
  });

  it('should return 1 when try to find the longest substring of "bbbbbbb"', () => {
    expect(findLongestSubstring("bbbbbbb")).toBe(1);
  });

  it('should return 6 when try to find the longest substring of "thisishowwedoit"', () => {
    expect(findLongestSubstring("thisishowwedoit")).toBe(6);
  });
});
