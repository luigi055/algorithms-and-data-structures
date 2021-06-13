import maxSubarrayOfSizeK from "./index";

describe("Testing maxSubarrayOfSizeK function", () => {
	it.each([
		[9, [2, 1, 5, 1, 3, 2], 3],
		[7, [2, 3, 4, 1, 5], 2],
		[10, [1, 2, 5, 2, 8, 1, 5], 2],
		[17, [1, 2, 5, 2, 8, 1, 5], 4],
		[6, [4, 2, 1, 6], 1],
		[13, [4, 2, 1, 6, 2], 4],
		[0, [], 4],
		[0, [2, 4], 4],
	])(
		"should return %s when the numbers are %s and k is %s",
		(expectedResult, numbers, k) => {
			expect(maxSubarrayOfSizeK(numbers, k)).toBe(expectedResult);
		}
	);
});
