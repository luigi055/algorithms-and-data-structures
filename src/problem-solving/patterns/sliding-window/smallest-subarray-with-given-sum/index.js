// Given an array of positive numbers and a positive number ‘S,’
// find the length of the smallest contiguous subarray whose
// sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// signature:
// smallestSubarrayGivenSum :: number -> number[] -> number;
// Time Complexity = O(N + N) => O(N)
// Space Complexity = O(1);

export default function smallestSubarrayGivenSum(s, numbers) {
	if (numbers.length === 0) return 0;

	let result = Infinity;
	let windowStart = 0;
	let windowSum = 0;

	for (let windowEnd = 0; windowEnd < numbers.length; windowEnd++) {
		windowSum += numbers[windowEnd];

		while (windowSum >= s) {
			result = Math.min(result, windowEnd - windowStart + 1);
			windowSum -= numbers[windowStart];
			windowStart += 1;
		}
	}

	if (result === Infinity) return 0;

	return result;
}
