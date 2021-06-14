import fruitIntoBaskets from "./index";

describe("Testing fruitIntoBaskets function", () => {
	it.each([
		[3, ["A", "B", "C", "A", "C"]],
		[5, ["A", "B", "C", "B", "B", "C"]],
		[2, ["A", "Z"]],
		[0, []],
	])(
		"should return %s when the characters representing fruits are %s",
		(expectedResult, characters) => {
			expect(fruitIntoBaskets(characters)).toBe(expectedResult);
		}
	);
});
