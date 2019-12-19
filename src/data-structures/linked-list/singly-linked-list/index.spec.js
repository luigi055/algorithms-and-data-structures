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
});
