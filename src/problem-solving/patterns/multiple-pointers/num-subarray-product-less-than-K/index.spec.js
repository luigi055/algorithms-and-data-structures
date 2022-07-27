import numSubarrayProductLessThanK from "./index";

describe("Testing numSubarrayProductLessThanK function", () => {
	it.each([
		[[2, 5, 3, 10], 30, 6],
		[[8, 2, 6, 5], 50, 7],
		[[8, 2, 50, 1, 2], 50, 6],
		[[10, 5, 2, 6], 100, 8],
	])(
		"should count all subarrays which product are less than &s",
		(arr, target, expected) => {
			expect(numSubarrayProductLessThanK(arr, target)).toEqual(expected);
		}
	);
});
