import isPalindrome from "./index";

describe("testing isPalindrome function", () => {
  it("should return false why try to evaluate if awesome is palindrome", () => {
    expect(isPalindrome("awesome")).toBe(false);
  });

  it("should return false why try to evaluate if foobar is palindrome", () => {
    expect(isPalindrome("awesome")).toBe(false);
  });

  it("should return true why try to evaluate if tacocat is palindrome", () => {
    expect(isPalindrome("tacocat")).toBe(true);
  });

  it("should return true why try to evaluate if amanaplanacanalpanama is palindrome", () => {
    expect(isPalindrome("amanaplanacanalpanama")).toBe(true);
  });

  it("should return false why try to evaluate if amanaplanacanalpandemonium is palindrome", () => {
    expect(isPalindrome("amanaplanacanalpandemonium")).toBe(false);
  });
});
