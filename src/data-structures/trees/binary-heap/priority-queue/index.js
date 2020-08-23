export class Node {
  constructor(priority, value) {
    this.priority = priority
    this.value = value;
  }
}

// Implementing a priorityQueue using a MinBinaryHeap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  _getFatherIndex(childIndex) {
    return Math.floor((childIndex-1)/2);
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
    const newValue = this.values[childIndex].priority
    const fatherValueIndex = this._getFatherIndex(childIndex);
    const fatherValue = this.values[fatherValueIndex] ? this.values[fatherValueIndex].priority : undefined;

    if (fatherValueIndex <0 ) return;
    if (newValue >= fatherValue) return;

    this._swapValues(fatherValueIndex,childIndex)
    this._bubbleUpByIndex(fatherValueIndex);
  }

  _bubbleDownByIndex(fatherIndex) {
    const leftChildIndex = this._getLeftChildIndex(fatherIndex)
    const rightChildIndex = this._getRightChildIndex(fatherIndex)
    const leftChildValue = this.values[leftChildIndex]? this.values[leftChildIndex].priority : undefined;
    const rightChildValue = this.values[rightChildIndex]? this.values[rightChildIndex].priority: undefined;
    const newFatherValue = this.values[fatherIndex]? this.values[fatherIndex].priority : undefined

    if (newFatherValue > leftChildValue && !rightChildValue || leftChildValue < rightChildValue ) {
      this._swapValues(fatherIndex, leftChildIndex);
      this._bubbleDownByIndex(leftChildIndex);
      return;
    }
    if (newFatherValue > rightChildValue && !leftChildValue || rightChildValue < leftChildValue ) {
      this._swapValues(fatherIndex, rightChildIndex);
      this._bubbleDownByIndex(rightChildIndex);
      return;
    }
  }

  enqueue(value) {
    this.values.push(value);
    this._bubbleUpByIndex(this.values.length -1);
  }

  dequeue() {
    const extractedValue = this.values[0] || null;
    const lastValue = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastValue;

      this._bubbleDownByIndex(0);
    }
    return extractedValue;
  }
}

export default PriorityQueue;