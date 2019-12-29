import Stack from "./";

describe("Testing the implementation from scratch of stack", () => {
  it("should create an empty stack", () => {
    const stack = new Stack();

    expect(stack.size).toBe(0);
    expect(stack.first).toBe(null);
    expect(stack.last).toBe(null);
  });

  it("should add a value to the stack and return 1", () => {
    const stack = new Stack();
    const firstValue = "Hello";

    expect(stack.push(firstValue)).toBe(1);
    expect(stack.first.value).toBe(firstValue);
    expect(stack.last.value).toBe(firstValue);
    expect(stack.size).toBe(1);
  });

  it("should add two values to the stack and the head should be the second element pushed", () => {
    const stack = new Stack();
    const firstValue = "Hello";
    const secondValue = "World";

    expect(stack.push(firstValue)).toBe(1);
    expect(stack.push(secondValue)).toBe(2);
    expect(stack.first.value).toBe(secondValue);
    expect(stack.last.value).toBe(firstValue);
    expect(stack.size).toBe(2);
  });

  it("should remove the only element in the stack", () => {
    const stack = new Stack();
    const firstValue = "Hello";

    stack.push(firstValue);

    expect(stack.pop().value).toBe(firstValue);
    expect(stack.first).toBe(null);
    expect(stack.last).toBe(null);
    expect(stack.size).toBe(0);
  });

  it("should remove the last element pushed and the head and tail should point to the same node", () => {
    const stack = new Stack();
    const firstValue = "Hello";
    const secondValue = "World";

    stack.push(firstValue);
    stack.push(secondValue);

    expect(stack.pop().value).toBe(secondValue);
    expect(stack.first).toEqual(stack.last);
    expect(stack.size).toBe(1);
  });

  it("should remove the last element (which is the third element pushed)", () => {
    const stack = new Stack();
    const firstValue = "Hello";
    const secondValue = "World";
    const thirdValue = "galaxy";

    stack.push(firstValue);
    stack.push(secondValue);
    stack.push(thirdValue);

    expect(stack.pop().value).toBe(thirdValue);
    expect(stack.first.value).toEqual(secondValue);
    expect(stack.last.value).toEqual(firstValue);
    expect(stack.size).toBe(2);
  });
});
