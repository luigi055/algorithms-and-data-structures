import smallestSubarrayGivenSum from "./index";

describe("Testing smallestSubarrayGivenSum function", () => {
	it.each([
		[2, 7, [2, 1, 5, 2, 3, 2]],
		[1, 7, [2, 1, 5, 2, 8]],
		[3, 8, [3, 4, 1, 1, 6]],
		[0, 8, [1, 2, 1, 1]],
		[0, 8, [1, 2]],
		[1, 5, [2, 5]],
		[0, 5, []],
	])(
		"should return %s when S is %s and numbers are %s",
		(expectedResult, s, numbers) => {
			expect(smallestSubarrayGivenSum(s, numbers)).toBe(expectedResult);
		}
	);
});
