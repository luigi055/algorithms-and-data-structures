import getSubArraysProductLessThanK from "./index";

describe("Testing getSubArraysProductLessThanK function", () => {
	it("should get all subarrays of [10, 5, 2, 6] which product are less than 100", () => {
		expect(getSubArraysProductLessThanK([10, 5, 2, 6], 100)).toEqual([
			[10],
			[10, 5],
			[5],
			[5, 2],
			[2],
			[5, 2, 6],
			[2, 6],
			[6],
		]);
	});

	it("should get all subarrays of [8, 2, 50, 1, 2] which product are less than 50", () => {
		expect(getSubArraysProductLessThanK([8, 2, 50, 1, 2], 50)).toEqual([
			[8],
			[8, 2],
			[2],
			[1],
			[1, 2],
			[2],
		]);
	});

	it("should get all subarrays of [8,2,6,5] which product are less than 50", () => {
		expect(getSubArraysProductLessThanK([8, 2, 6, 5], 50)).toEqual([
			[8],
			[8, 2],
			[2],
			[2, 6],
			[6],
			[6, 5],
			[5],
		]);
	});

	it("should get all subarrays of [2, 5, 3, 10] which product are less than 30", () => {
		expect(getSubArraysProductLessThanK([2, 5, 3, 10], 30)).toEqual([
			[2],
			[2, 5],
			[5],
			[5, 3],
			[3],
			[10],
		]);
	});
});
