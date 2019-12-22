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
});
