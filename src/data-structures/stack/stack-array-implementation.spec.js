import Stack from "./stack-array-implementation";

describe("Testing stack implementation using array", () => {
  it("should add a element to the stack", () => {
    const stack = new Stack();

    const firstElement = "Hello";

    stack.push(firstElement);

    expect(stack.head).toBe(firstElement);
  });

  it("should add two elements to the stack and the second element pushed should be the head", () => {
    const stack = new Stack();

    const firstElement = "Hello";
    const secondElement = "World";

    stack.push(firstElement);
    stack.push(secondElement);

    expect(stack.head).toBe(secondElement);
    expect(stack.length).toBe(2);
  });

  it("should removed the only element", () => {
    const stack = new Stack();

    const firstElement = "Hello";
    stack.push(firstElement);

    expect(stack.length).toBe(1);

    stack.pop();

    expect(stack.head).toBe(undefined);
    expect(stack.length).toBe(0);
  });

  it("should removed the third element pushed to the stack", () => {
    const stack = new Stack();

    const firstElement = "Hello";
    const secondElement = "World";
    const thirdElement = "universe";
    stack.push(firstElement);
    stack.push(secondElement);
    stack.push(thirdElement);

    expect(stack.length).toBe(3);

    expect(stack.pop()).toBe(thirdElement);

    expect(stack.head).toBe(secondElement);
    expect(stack.length).toBe(2);
  });
});
