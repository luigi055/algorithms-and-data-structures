// Given a string, find the length of the longest substring in
//it with no more than K distinct characters.

//You can assume that K is less than or equal to the length of the given string.

// signature:
// longestSubstringWithKDistinctChars :: string -> number -> number;
// Time Complexity = O(N + N) => O(N)
// Space Complexity = O(N);

export default function longestSubstringWithKDistinctChars(string, k) {
	let result = 0;
	let windowStart = 0;
	let frequencyCounter = {};

	for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
		const rightChar = string[windowEnd];

		if (!(rightChar in frequencyCounter)) {
			frequencyCounter[rightChar] = 0;
		}

		frequencyCounter[rightChar] += 1;

		while (Object.keys(frequencyCounter).length > k) {
			const leftChar = string[windowStart];

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
