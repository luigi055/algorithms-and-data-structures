import SinglyLinkedList from "./index";

describe("Testing SinglyLinkedList Class", () => {
  test("when push a first value the head and the tail should be the same and length 1", () => {
    const linkedList = new SinglyLinkedList();
    linkedList.push("hello");

    expect(linkedList.head).toEqual(linkedList.tail);
    expect(linkedList.length).toEqual(1);
  });

  test("when push a second value the head and the tail should be the different and length 2", () => {
    const linkedList = new SinglyLinkedList();
    linkedList.push("hello");
    linkedList.push("bye");

    expect(linkedList.head).not.toEqual(linkedList.tail);
    expect(linkedList.length).toBe(2);
  });

  test("when push 3 values I coould access to the third value using next method", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.head.next.next.value).toBe(thirdValue);
  });

  test("the value of tail should be the same as the second value pushed", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";

    linkedList.push(firstValue);
    linkedList.push(secondValue);

    expect(linkedList.tail.value).toBe(secondValue);
  });

  test("the value of head should be the same as the first value pushed", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";

    linkedList.push(firstValue);
    linkedList.push(secondValue);

    expect(linkedList.head.value).toBe(firstValue);
  });

  test("the head and the tail should be the same when pop the last item", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.pop();

    expect(linkedList.head.value).toBe(linkedList.tail.value);
  });

  test("the head and the tail should be remove when remove the unique value it has", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";

    linkedList.push(firstValue);
    linkedList.pop();

    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
  });
  test("the length should be 0 when remove the unique value it has", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";

    linkedList.push(firstValue);
    linkedList.pop();

    expect(linkedList.length).toBe(0);
  });

  test("the tail value should be the same as the penultimate value", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);
    linkedList.pop();

    expect(linkedList.tail.value).toBe(secondValue);
  });

  it("should remove the first item", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);
    linkedList.shift();

    expect(linkedList.length).toBe(2);
    expect(linkedList.head.value).toBe(secondValue);
  });

  test("the tail and head should be null when there is just one item and invoke shift", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";

    linkedList.push(firstValue);
    linkedList.shift();

    expect(linkedList.tail).toBe(null);
    expect(linkedList.head).toBe(null);
  });

  it("should remove the first item", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);
    linkedList.shift();

    expect(linkedList.length).toBe(2);
    expect(linkedList.head.value).toBe(secondValue);
  });

  it("should add a new item at tbe biggining of the lined list", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";

    linkedList.unshift(firstValue);

    expect(linkedList.length).toBe(1);
    expect(linkedList.head.value).toBe(firstValue);
    expect(linkedList.tail.value).toBe(firstValue);
  });

  test("when add 2 items the tail node should be equal to the first value entered with unshift", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "World";

    linkedList.unshift(firstValue);
    linkedList.unshift(secondValue);

    expect(linkedList.length).toBe(2);
    expect(linkedList.head.value).toBe(secondValue);
    expect(linkedList.tail.value).toBe(firstValue);
    expect(linkedList.tail.next).toBe(null);
  });

  it("should find the second node of the list", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "World";
    const thirdValue = "universe";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.length).toBe(3);
    expect(linkedList.get(1).value).toBe(secondValue);
  });

  it("should return null when get a node index that is greater than the linked list length", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";

    linkedList.push(firstValue);

    expect(linkedList.length).toBe(1);
    expect(linkedList.get(5)).toBe(null);
  });

  it("should return null when get a node index is less than 0", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";

    linkedList.push(firstValue);

    expect(linkedList.length).toBe(1);
    expect(linkedList.get(-1)).toBe(null);
  });

  it('should set the second value "something"', () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "wonderful";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    expect(linkedList.set(1, "something")).toBe(true);
    expect(linkedList.get(1).value).toBe("something");
  });

  it("should not set a new value to a index that doesnt exist", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";

    linkedList.push(firstValue);
    expect(linkedList.set(1, "something")).toBe(false);
    expect(linkedList.get(1)).toBe(null);
  });

  it("should return false when try to insert a value that is less than 0", () => {
    const linkedList = new SinglyLinkedList();

    expect(linkedList.insert(-1, "something")).toBe(false);
  });

  it("should return false when try to insert a value that is greater than length", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";

    linkedList.push(firstValue);

    expect(linkedList.insert(2, "something")).toBe(false);
  });

  it("should return false when trying to insert a value that is greater than length", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";

    linkedList.push(firstValue);

    expect(linkedList.insert(2, "something")).toBe(false);
  });
  it("should return true when trying to insert a value that is equal to the length", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const valueToChange = "something";

    linkedList.push(firstValue);

    expect(linkedList.insert(1, valueToChange)).toBe(true);
    expect(linkedList.get(1).value).toBe(valueToChange);
  });

  it("should return true when trying to insert a value that in the position 0", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const valueToChange = "something";

    linkedList.push(firstValue);

    expect(linkedList.insert(0, valueToChange)).toBe(true);
    expect(linkedList.get(0).value).toBe(valueToChange);
  });

  it("should add a new node when trying to insert a value in the first position", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.length).toBe(3);
    expect(linkedList.insert(1, valueToChange)).toBe(true);
    expect(linkedList.length).toBe(4);
    expect(linkedList.get(1).value).toBe(valueToChange);
  });

  test("when insert a new node the next node of the next node should be the inserted node", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.insert(1, valueToChange)).toBe(true);
    expect(linkedList.get(1).value).toBe(valueToChange);
    expect(linkedList.get(1).next.value).toBe(secondValue);
  });

  test("when insert a new node the next node of the previous node should be the inserted node", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.insert(1, valueToChange)).toBe(true);
    expect(linkedList.get(1).value).toBe(valueToChange);
    expect(linkedList.get(0).next.value).toBe(valueToChange);
  });

  it("should remove the first node when trying to remove the position zero", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.length).toBe(3);
    expect(linkedList.remove(0).value).toBe(firstValue);
    expect(linkedList.length).toBe(2);
    expect(linkedList.get(0).value).toBe(secondValue);
  });

  it("should remove the last node when trying to remove the last position in the linked list", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.length).toBe(3);
    expect(linkedList.remove(2).value).toBe(thirdValue);
    expect(linkedList.length).toBe(2);
    expect(linkedList.get(2)).toBe(null);
  });

  it("should return false when trying to remove an index less than 0", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.length).toBe(3);
    expect(linkedList.remove(-1)).toBe(undefined);
    expect(linkedList.length).toBe(3);
  });

  it("should return false when trying to remove an index greater than the length of the linked list", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.length).toBe(3);
    expect(linkedList.remove(4)).toBe(undefined);
    expect(linkedList.length).toBe(3);
  });

  it("should return the second value when trying to remove the first position of the singly linked list", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.length).toBe(3);
    expect(linkedList.remove(1).value).toBe(secondValue);
    expect(linkedList.length).toBe(2);
  });

  test("when remove the first position the second position should be now the first position of the singly linked list", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    linkedList.remove(1);

    expect(linkedList.get(1).value).toBe(thirdValue);
  });
  test("when remove the last position the tail should be the penultimate node", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    linkedList.remove(2);

    expect(linkedList.get(2)).toBe(null);
    expect(linkedList.tail.value).toBe(secondValue);
  });
  test("the head should be the tail when and vice versa when invoke the reverse mehtod", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    linkedList.reverse();

    expect(linkedList.head.value).toBe(thirdValue);
    expect(linkedList.tail.value).toBe(firstValue);
  });
  test("the first position should be the third", () => {
    const linkedList = new SinglyLinkedList();
    const firstValue = "hello";
    const secondValue = "world";
    const thirdValue = "universe";
    const fourthValue = "galaxy";
    const fifthValue = "dimension";
    const valueToChange = "something";

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);
    linkedList.push(fourthValue);
    linkedList.push(fifthValue);

    linkedList.reverse();

    expect(linkedList.get(3).value).toBe(secondValue);
    expect(linkedList.get(1).value).toBe(fourthValue);
  });
});
