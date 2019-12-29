const core = Symbol("core");
const updateLength = Symbol("updateLength");

class Stack {
  constructor() {
    this[core] = [];
    this.head = undefined;
    this.length = this[core].length;
  }

  [updateLength]() {
    this.length = this[core].length;

    return this.length;
  }

  push(element) {
    this.head = element;
    this[core].push(element);

    return this[updateLength]();
  }

  pop() {
    this.head = this[core][1];
    const elementPopped = this[core].pop();
    this[updateLength]();

    return elementPopped;
  }
}

export default Stack;
