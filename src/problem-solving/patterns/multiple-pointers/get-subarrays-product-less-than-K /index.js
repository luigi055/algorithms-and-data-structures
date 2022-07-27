function getSubarraysProductLessThanK(arr, target) {
	const result = [];
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
		while (left <= right) {
			result.push(arr.slice(left, right + 1));
			left += 1;
		}

		windowEnd += 1;
	}

	return result;
}

export default getSubarraysProductLessThanK;
