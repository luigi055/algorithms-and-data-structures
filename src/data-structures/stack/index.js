class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temporalNode = this.first;
      this.first = newNode;
      this.first.next = temporalNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const temporalNode = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temporalNode.next;
    }

    this.size--;

    return temporalNode;
  }
}

export default Stack;
