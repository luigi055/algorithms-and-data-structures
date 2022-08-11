class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;

		return this;
	}

	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = newNode;
			this.head = newNode;
		}
		this.length++;

		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let currentNode = this.head;
		let newTail = currentNode;

		while (currentNode.next) {
			newTail = currentNode;
			currentNode = currentNode.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return currentNode;
	}

	shift() {
		if (!this.head) return undefined;
		const currentHead = this.head;
		this.head = currentHead.next;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}

		return currentHead;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let accumulator = this.head;
		for (let i = 1; i <= index; i++) {
			accumulator = accumulator.next;
		}

		return accumulator;
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

		const newNode = new Node(value);
		const previousNode = this.get(index - 1);
		const temporal = previousNode.next;
		previousNode.next = newNode;

		newNode.next = temporal;

		this.length++;

		return true;
	}

	remove(index, value) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		const previousNode = this.get(index - 1);
		const removed = previousNode.next;
		previousNode.next = removed.next;

		this.length--;

		return removed;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let previous = null;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = previous;

			previous = node;
			node = next;
		}
		return this;
	}

	static from(iterator) {
		const linkedList = new SinglyLinkedList();
		for (let value of iterator) {
			linkedList.push(value);
		}

		return linkedList;
	}
}

export default SinglyLinkedList;
