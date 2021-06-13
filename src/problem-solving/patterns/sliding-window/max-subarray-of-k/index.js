// Given an array of positive numbers and a positive
// number "k" find the maximum sum of any contiguous sub arrays of size "k"

// signature:
// maxSubarrayOfSizeK :: number[] -> number -> number;
// Time Complexity = O(N)
// Space Complexity = O(1);

export default function maxSubarrayOfSizeK(numbers, k) {
	if (numbers.length - 1 < k) return 0;
	let windowStart = 0;
	let result = 0;
	let windowSum = 0;

	for (let windowEnd = 0; windowEnd < numbers.length; windowEnd++) {
		windowSum += numbers[windowEnd];

		if (windowEnd >= k - 1) {
			result = Math.max(result, windowSum);
			windowSum -= numbers[windowStart];
			windowStart += 1;
		}
	}

	return result;
}
