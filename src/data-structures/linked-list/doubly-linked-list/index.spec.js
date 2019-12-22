import DoublyLinkedList from "./index";

describe("Testing DoublyLinkedList class", () => {
  it("should instantiate the class with the basic state", () => {
    const doublyLinkedList = new DoublyLinkedList();

    expect(doublyLinkedList.head).toBe(null);
    expect(doublyLinkedList.tail).toBe(null);
    expect(doublyLinkedList.length).toBe(0);
  });

  it("should push a value and the head and the tail should be the same node", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    doublyLinkedList.push(firstValue);

    expect(doublyLinkedList.tail).toEqual(doublyLinkedList.head);
    expect(doublyLinkedList.length).toBe(1);
  });

  it("should push a second value and the head and the tail should be the same node", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);

    expect(doublyLinkedList.head.value).toBe(firstValue);
    expect(doublyLinkedList.tail.value).toBe(secondValue);
    expect(doublyLinkedList.length).toBe(2);
  });

  it("should push a second value and the head next should point to the tail", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);

    expect(doublyLinkedList.head.previous).toBe(null);
    expect(doublyLinkedList.head.next).toBe(doublyLinkedList.tail);
    expect(doublyLinkedList.length).toBe(2);
  });

  it("should push a second value and the tail previous should point to the head", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);

    expect(doublyLinkedList.tail.next).toBe(null);
    expect(doublyLinkedList.tail.previous).toBe(doublyLinkedList.head);
    expect(doublyLinkedList.length).toBe(2);
  });

  it("should push a third value and the tail previous and head next should point to the second value", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.tail.previous.value).toBe(secondValue);
    expect(doublyLinkedList.head.next.value).toBe(secondValue);
    expect(doublyLinkedList.length).toBe(3);
  });

  it("should push a third value and the second node' previous should point to head", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.head.next.previous).toEqual(doublyLinkedList.head);
    expect(doublyLinkedList.tail.previous.next).toEqual(doublyLinkedList.tail);
    expect(doublyLinkedList.length).toBe(3);
  });

  it("should return undefined if there is not nodes to remove", () => {
    const doublyLinkedList = new DoublyLinkedList();

    expect(doublyLinkedList.pop()).toBe(undefined);
  });

  it("should set head and tail null when popping the only one node in the list", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";

    doublyLinkedList.push(firstValue);

    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.pop().value).toBe(firstValue);
    expect(doublyLinkedList.length).toBe(0);
    expect(doublyLinkedList.head).toBe(null);
    expect(doublyLinkedList.tail).toBe(null);
  });

  it("should set remove the second item and head and tail should be the same", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);

    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.pop().value).toBe(secondValue);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head).toEqual(doublyLinkedList.tail);
  });

  it("should pop the third item and the new tail next property should be null", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.pop().value).toBe(thirdValue);
    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.tail.value).toEqual(secondValue);
    expect(doublyLinkedList.tail.previous.value).toEqual(firstValue);
    expect(doublyLinkedList.tail.next).toEqual(null);
  });

  it("should pop the third and second item and the new tail and head should be the same", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.pop().value).toBe(thirdValue);
    expect(doublyLinkedList.pop().value).toBe(secondValue);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.tail).toEqual(doublyLinkedList.head);
  });

  it("should return undefined when trying to shifting a linked list without nodes", () => {
    const doublyLinkedList = new DoublyLinkedList();

    expect(doublyLinkedList.shift()).toEqual(undefined);
  });

  it("should remove the only one element using shift and head and tail should be null", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";

    doublyLinkedList.push(firstValue);

    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.shift().value).toEqual(firstValue);
    expect(doublyLinkedList.length).toBe(0);
    expect(doublyLinkedList.head).toBe(null);
    expect(doublyLinkedList.tail).toBe(null);
  });

  it("should remove the first node using shift and the second node is now the head", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.shift().value).toEqual(firstValue);
    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.head.value).toBe(secondValue);
    expect(doublyLinkedList.head.previous).toBe(null);
    expect(doublyLinkedList.head.next.value).toBe(thirdValue);
  });

  it("should remove the first and the second node using shifting twice", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.shift().value).toEqual(firstValue);
    expect(doublyLinkedList.shift().value).toEqual(secondValue);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head.value).toBe(thirdValue);
    expect(doublyLinkedList.head.previous).toBe(null);
    expect(doublyLinkedList.head.next).toBe(null);
    expect(doublyLinkedList.tail.value).toBe(thirdValue);
    expect(doublyLinkedList.tail.previous).toBe(null);
    expect(doublyLinkedList.tail.next).toBe(null);
  });

  it("should unshift a value and the head and the tail should be the same node", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    doublyLinkedList.unshift(firstValue);

    expect(doublyLinkedList.tail).toEqual(doublyLinkedList.head);
    expect(doublyLinkedList.length).toBe(1);
  });

  it("should unshift a pair of nodes", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";

    doublyLinkedList.unshift(firstValue);
    doublyLinkedList.unshift(secondValue);

    expect(doublyLinkedList.head.value).toBe(secondValue);
    expect(doublyLinkedList.head.previous).toBe(null);
    expect(doublyLinkedList.head.next).toEqual(doublyLinkedList.tail);
    expect(doublyLinkedList.tail.value).toBe(firstValue);
    expect(doublyLinkedList.tail.next).toBe(null);
    expect(doublyLinkedList.tail.previous).toEqual(doublyLinkedList.head);
    expect(doublyLinkedList.length).toBe(2);
  });

  it("should unshift three nodes", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    doublyLinkedList.unshift(firstValue);
    doublyLinkedList.unshift(secondValue);
    doublyLinkedList.unshift(thirdValue);

    expect(doublyLinkedList.head.next.value).toBe(secondValue);
    expect(doublyLinkedList.tail.previous.value).toBe(secondValue);
    expect(doublyLinkedList.length).toBe(3);
  });

  it("should find the second node of the list", () => {
    const linkedList = new DoublyLinkedList();
    const firstValue = "hello";
    const secondValue = "World";
    const thirdValue = "universe";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.length).toBe(3);
    expect(linkedList.get(1).value).toBe(secondValue);
    expect(linkedList.get(1).next.value).toBe(thirdValue);
    expect(linkedList.get(1).previous.value).toBe(firstValue);
  });

  it("should return null when get a node index that is greater than the linked list length", () => {
    const linkedList = new DoublyLinkedList();
    const firstValue = "hello";

    linkedList.push(firstValue);

    expect(linkedList.length).toBe(1);
    expect(linkedList.get(5)).toBe(null);
  });

  it("should return null when get a node index is less than 0", () => {
    const linkedList = new DoublyLinkedList();
    const firstValue = "hello";

    linkedList.push(firstValue);

    expect(linkedList.length).toBe(1);
    expect(linkedList.get(-1)).toBe(null);
  });
});
