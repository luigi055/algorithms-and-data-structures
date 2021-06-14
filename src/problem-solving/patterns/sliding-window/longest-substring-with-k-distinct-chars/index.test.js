import longestSubstringWithKDistinctChars from "./index";

describe("Testing longestSubstringWithKDistinctChars function", () => {
	it.each([
		[4, "araaci", 2],
		[2, "araaci", 1],
		[5, "cbbebi", 3],
		[2, "cb", 3],
		[0, "", 2],
	])(
		"should return %s when the string %s and k=%s",
		(expectedResult, string, k) => {
			expect(longestSubstringWithKDistinctChars(string, k)).toBe(
				expectedResult
			);
		}
	);
});
