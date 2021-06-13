function matchElementsSumHead(toCompare, numbers = []) {
	if (numbers === undefined) return "";
	if (numbers.length <= 1) return "";

	let left = 0;
	let right = numbers.length - 1;
	let result = "";

	while (left < numbers.length - 1) {
		let sum = numbers[left] + numbers[right];
		if (right === left) {
			left++;
			right = numbers.length - 1;
		} else if (sum === toCompare) {
			result += ` ${numbers[left]},${numbers[right]}`;
			right--;
		} else {
			right--;
		}
	}

	return result.trim();
}

export default matchElementsSumHead;
