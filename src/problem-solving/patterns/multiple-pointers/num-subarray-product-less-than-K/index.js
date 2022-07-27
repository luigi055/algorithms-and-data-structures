function numSubarrayProductLessThanK(arr, target) {
	let result = 0;
	let windowStart = 0;
	let windowEnd = 0;
	let currentProduct = 1;

	for (let endNumber of arr) {
		currentProduct *= endNumber;
		while (currentProduct >= target) {
			currentProduct /= arr[windowStart];
			windowStart += 1;
		}

		let left = windowStart;
		let right = windowEnd;
		if (left <= right) {
			result += right - left + 1;
		}

		windowEnd += 1;
	}

	return result;
}

export default numSubarrayProductLessThanK;
