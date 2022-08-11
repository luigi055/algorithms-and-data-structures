class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	_getFatherIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	}

	_getLeftChildIndex(fatherIndex) {
		return 2 * fatherIndex + 1;
	}

	_getRightChildIndex(fatherIndex) {
		return this._getLeftChildIndex(fatherIndex) + 1;
	}

	_swapValues(fatherIndex, childIndex) {
		const oldFatherElement = this.values[fatherIndex];
		const oldChildElement = this.values[childIndex];

		this.values[childIndex] = oldFatherElement;
		this.values[fatherIndex] = oldChildElement;
	}

	_bubbleUpByIndex(childIndex) {
		const newValue = this.values[childIndex];
		const fatherValueIndex = this._getFatherIndex(childIndex);
		const fatherValue = this.values[fatherValueIndex];

		if (fatherValueIndex < 0) return;
		if (newValue <= fatherValue) return;

		this._swapValues(fatherValueIndex, childIndex);
		this._bubbleUpByIndex(fatherValueIndex);
	}

	_bubbleDownByIndex(fatherIndex) {
		const leftChildIndex = this._getLeftChildIndex(fatherIndex);
		const rightChildIndex = this._getRightChildIndex(fatherIndex);
		const leftChildValue = this.values[leftChildIndex];
		const rightChildValue = this.values[rightChildIndex];
		const newFatherValue = this.values[fatherIndex];

		if (newFatherValue < leftChildValue && leftChildValue > rightChildValue) {
			this._swapValues(fatherIndex, leftChildIndex);
			this._bubbleDownByIndex(leftChildIndex);
			return;
		}
		if (newFatherValue < rightChildValue && rightChildValue > leftChildValue) {
			this._swapValues(fatherIndex, rightChildIndex);
			this._bubbleDownByIndex(rightChildIndex);
			return;
		}
	}

	insert(value) {
		this.values.push(value);
		this._bubbleUpByIndex(this.values.length - 1);
	}

	extractMax() {
		const extractedValue = this.values[0] || null;
		const lastValue = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = lastValue;

			this._bubbleDownByIndex(0);
		}

		return extractedValue;
	}

	static from(iterator) {
		const binaryHeap = new MaxBinaryHeap();

		for (const element of iterator) {
			binaryHeap.insert(element);
		}

		return binaryHeap;
	}
}

export default MaxBinaryHeap;
