import isValidAnagram from "./valid-anagram";

describe("Testing isValidAnagram function", () => {
  it("should return true when you try to compare empty string against empty string", () => {
    expect(isValidAnagram("", "")).toBe(true);
  });

  it("should return false if both parameters have different length", () => {
    expect(isValidAnagram("", "hi")).toBe(false);
  });

  it("should return true if both parameters have the same characters", () => {
    expect(isValidAnagram("hi", "hi")).toBe(true);
  });

  it("should return false when compare the anagram of aaz and zza", () => {
    expect(isValidAnagram("aaz", "zza")).toBe(false);
  });

  it("should return true when compare the anagram of anagram and nagaram", () => {
    expect(isValidAnagram("anagram", "nagaram")).toBe(true);
  });

  it("should return false when compare the anagram of rat and car", () => {
    expect(isValidAnagram("rat", "car")).toBe(false);
  });

  it("should return false when compare the anagram of awesome and awesom", () => {
    expect(isValidAnagram("awesome", "awesom")).toBe(false);
  });

  it("should return false when compare the anagram of amanaplanacanalpanama and acanalmanplanpamana", () => {
    expect(isValidAnagram("amanaplanacanalpanama", "acanalmanplanpamana")).toBe(
      false
    );
  });

  it("should return true when compare the anagram of qwerty and qeywrt", () => {
    expect(isValidAnagram("qwerty", "qeywrt")).toBe(true);
  });

  it("should return true when compare the anagram of texttwisttime and timetwisttext", () => {
    expect(isValidAnagram("texttwisttime", "timetwisttext")).toBe(true);
  });
});
