import Queue from "./index";

describe("Testing Queue implementation", () => {
  it("should create an empty Queue", () => {
    const queue = new Queue();

    expect(queue.head).toBe(null);
    expect(queue.tail).toBe(null);
    expect(queue.size).toBe(0);
  });

  it("should enqueue the first value", () => {
    const queue = new Queue();
    const firstValue = "Hello";

    queue.enqueue(firstValue);
    expect(queue.head.value).toBe(firstValue);
    expect(queue.tail.value).toBe(firstValue);
    expect(queue.size).toBe(1);
  });
  it("should enqueue 2 elements and the second element should be the tail in the queue", () => {
    const queue = new Queue();
    const firstValue = "Hello";
    const secondValue = "World";

    queue.enqueue(firstValue);
    queue.enqueue(secondValue);

    expect(queue.head.value).toBe(firstValue);
    expect(queue.tail.value).toBe(secondValue);
    expect(queue.size).toBe(2);
  });

  it("should enqueue 3 elements and the third element should be the tail in the queue", () => {
    const queue = new Queue();
    const firstValue = "Hello";
    const secondValue = "World";
    const thirdValue = "Galaxy";

    queue.enqueue(firstValue);
    queue.enqueue(secondValue);
    queue.enqueue(thirdValue);

    expect(queue.head.value).toBe(firstValue);
    expect(queue.head.next.value).toBe(secondValue);
    expect(queue.head.next.next.value).toBe(thirdValue);
    expect(queue.tail.value).toBe(thirdValue);
    expect(queue.size).toBe(3);
  });

  it("should return null when dequeue and empty queue", () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBe(null);
  });

  it("should dequeue the first element", () => {
    const queue = new Queue();

    const firstValue = "Hello";

    queue.enqueue(firstValue);

    expect(queue.dequeue()).toBe(firstValue);
    expect(queue.head).toBe(null);
    expect(queue.tail).toBe(null);
    expect(queue.size).toBe(0);
  });

  it("should dequeue the queue and the second element is now the head", () => {
    const queue = new Queue();

    const firstValue = "Hello";
    const secondValue = "World";

    queue.enqueue(firstValue);
    queue.enqueue(secondValue);

    expect(queue.dequeue()).toBe(firstValue);
    expect(queue.head.value).toBe(secondValue);
    expect(queue.tail.value).toBe(secondValue);
    expect(queue.size).toBe(1);
  });
});
