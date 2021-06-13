import matchElementsSumHead from "./index";

describe("Testing matchElementsSumHead function", () => {
	it.each([
		[undefined, undefined, ""],
		[5, [], ""],
		[2, [5], ""],
		[41, [6, 2], ""],
		[100, [90, 90, 90, 90, 11], ""],
		[8, [-5, 4, 2, 7, -6, 4], "4,4"],
		[8, [1, 2, 3, 4, 5, 7], "1,7 3,5"],
	])(
		"should return an empty string when neither of the numbers in the tail of the array subtract the head",
		(comparedNum, arr, expected) => {
			expect(matchElementsSumHead(comparedNum, arr)).toEqual(expected);
		}
	);

	it.each([
		[7, [6, 4, 1, 7, -2, 3, 12], "6,1 4,3"],
		[17, [4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7], "6,11 10,7 15,2"],
	])(
		"should subtract all combination of %s and all the values that sums the head of the array are %s",
		(comparedNum, arr, expected) => {
			expect(matchElementsSumHead(comparedNum, arr)).toEqual(expected);
		}
	);
});
