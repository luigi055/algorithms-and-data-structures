// Given an array of characters where each character represents a
// fruit tree, you are given two baskets, and your goal is to put
// maximum number of fruits in each basket. The only restriction is
// that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have
// started. You will pick one fruit from each tree until you cannot, i.e.,
// you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

// Signature:
// fruitIntoBaskets :: char[] -> number

export default function fruitIntoBaskets(fruits) {
	if (fruits.length === 0) return 0;
	let result = 0;
	let windowStart = 0;
	let frequencyCounter = {};

	for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
		const rightChar = fruits[windowEnd];

		if (!(rightChar in frequencyCounter)) {
			frequencyCounter[rightChar] = 0;
		}
		frequencyCounter[rightChar] += 1;

		while (Object.keys(frequencyCounter).length > 2) {
			const leftChar = fruits[windowStart];

			frequencyCounter[leftChar] -= 1;
			if (frequencyCounter[leftChar] === 0) {
				delete frequencyCounter[leftChar];
			}

			windowStart += 1;
		}

		result = Math.max(result, windowEnd - windowStart + 1);
	}

	return result;
}
