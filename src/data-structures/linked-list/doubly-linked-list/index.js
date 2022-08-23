class LinkedListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	[Symbol.iterator]() {
		let current = this.head;
		return {
			next() {
				if (current) {
					const value = current;
					current = current.next;
					return { value: value, done: false };
				}
				return { value: null, done: true };
			},
		};
	}

	values() {
		return {
			[Symbol.iterator]: () => {
				const current = this.head;
				return {
					next() {
						if (current) {
							let value = current.value;
							current = current.next;
							return { value: value, done: false };
						}
						return { value: null, done: true };
					},
				};
			},
		};
	}

	push(value) {
		const newNode = new LinkedListNode(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	pop() {
		if (!this.head) return undefined;
		const poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.previous;
			this.tail.next = null;
			poppedNode.previous = null;
		}

		this.length--;

		return poppedNode;
	}

	shift() {
		if (!this.head) return undefined;
		const shiftedNode = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = shiftedNode.next;
			this.head.previous = null;
			shiftedNode.next = null;
		}

		this.length--;

		return shiftedNode;
	}

	unshift(value) {
		const newNode = new LinkedListNode(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.previous = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;

		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let count;
		let current;
		if (index <= this.length / 2) {
			count = 0;
			current = this.head;
			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while (count !== index) {
				current = current.previous;
				count--;
			}
		}
		return current;
	}

	set(index, value) {
		const foundNode = this.get(index);
		if (foundNode) {
			foundNode.value = value;
			return true;
		}
		return false;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);

		const newNode = new LinkedListNode(value);
		const previousNode = this.get(index - 1);
		const nextNode = previousNode.next;
		previousNode.next = newNode;
		newNode.next = nextNode;
		newNode.previous = previousNode;
		nextNode.previous = newNode;

		this.length++;

		return true;
	}

	remove(index, value) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		const previousNode = this.get(index - 1);
		const nextNode = this.get(index + 1);
		const removed = previousNode.next;
		previousNode.next = removed.next;
		nextNode.previous = removed.previous;

		this.length--;

		return removed;
	}

	static from(iterator) {
		const linkedList = new DoublyLinkedList();
		for (let value of iterator) {
			linkedList.push(value);
		}

		return linkedList;
	}
}

export default DoublyLinkedList;
