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
});
