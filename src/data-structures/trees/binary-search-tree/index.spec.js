import BinarySearchTree from "./index";

describe("Testing Binary Search tree class", () => {
  it("should create a new empty BinarySearchTree instance", () => {
    const binarySearchTree = new BinarySearchTree();

    expect(binarySearchTree.root).toBe(null);
  });

  it("should insert the root node", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const bstInsertedValue = binarySearchTree.insert(firstValue);

    expect(bstInsertedValue.root.value).toBe(firstValue);
  });

  it("should insert a second value to the right if the new value is greater than the root", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 20;
    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);

    expect(binarySearchTree.root.right.value).toBe(secondValue);
    expect(binarySearchTree.root.left).toBe(null);
  });

  it("should insert a second value to the left when the new value is smaller than the root", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 9;
    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);

    expect(binarySearchTree.root.left.value).toBe(secondValue);
    expect(binarySearchTree.root.right).toBe(null);
  });

  it("should add 2 values to the root and the greater number should be placed to the right and the smaller to the left", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 15;
    const thirdValue = 3;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);

    expect(binarySearchTree.root.left.value).toBe(thirdValue);
    expect(binarySearchTree.root.right.value).toBe(secondValue);
  });

  it("should add the fourth number to the right of the firts left's child", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 15;
    const thirdValue = 3;
    const fourthValue = 4;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);
    binarySearchTree.insert(fourthValue);

    expect(binarySearchTree.root.left.right.value).toBe(fourthValue);
  });

  it("should add the fourth number to the left of the firts left's child", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 15;
    const thirdValue = 3;
    const fourthValue = 2;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);
    binarySearchTree.insert(fourthValue);

    expect(binarySearchTree.root.left.left.value).toBe(fourthValue);
  });

  it("should add the fourth number to the left of the firts right's child", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 18;
    const thirdValue = 3;
    const fourthValue = 15;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);
    binarySearchTree.insert(fourthValue);

    expect(binarySearchTree.root.right.left.value).toBe(fourthValue);
  });

  it("should add the fourth number to the right of the firts right's child", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 18;
    const thirdValue = 3;
    const fourthValue = 21;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);
    binarySearchTree.insert(fourthValue);

    expect(binarySearchTree.root.right.right.value).toBe(fourthValue);
  });

  it("should return undefined when try to insert a duplicated value", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 9;
    const thirdValue = 3;
    const fourthValue = 15;
    const fifthValue = 3;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);
    binarySearchTree.insert(fourthValue);

    expect(binarySearchTree.insert(fifthValue)).toBe(undefined);
  });

  it("should find the root value", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;

    binarySearchTree.insert(firstValue);

    expect(binarySearchTree.find(firstValue)).toEqual(binarySearchTree.root);
  });

  it("should return undefined when there is no any node", () => {
    const binarySearchTree = new BinarySearchTree();

    expect(binarySearchTree.find(14)).toBe(undefined);
  });

  it("should return undefined when search for the value in the left side of the tree and it is not found", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 7;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);

    expect(binarySearchTree.find(5)).toBe(undefined);
  });
  it("should return undefined when search for the value in the right side of the tree and it is not found", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 20;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);

    expect(binarySearchTree.find(14)).toBe(undefined);
  });

  it("should find the root's left node", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 7;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);

    expect(binarySearchTree.find(secondValue)).toEqual(
      binarySearchTree.root.left
    );
  });

  it("should find the root's right node", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 15;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);

    expect(binarySearchTree.find(secondValue)).toEqual(
      binarySearchTree.root.right
    );
  });

  it("should find the left node of the first left child node of the root", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 9;
    const thirdValue = 3;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);

    expect(binarySearchTree.find(thirdValue)).toEqual(
      binarySearchTree.root.left.left
    );
  });

  it("should find the right node of the first left child node of the root", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 9;
    const thirdValue = 11;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);

    expect(binarySearchTree.find(thirdValue)).toEqual(
      binarySearchTree.root.left.right
    );
  });

  it("should find the left node of the first right child node of the root", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 55;
    const thirdValue = 30;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);

    expect(binarySearchTree.find(thirdValue)).toEqual(
      binarySearchTree.root.right.left
    );
  });

  it("should find the right node of the first right child node of the root", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 55;
    const thirdValue = 65;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);

    expect(binarySearchTree.find(thirdValue)).toEqual(
      binarySearchTree.root.right.right
    );
  });

  it("should contains the root value", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;

    binarySearchTree.insert(firstValue);

    expect(binarySearchTree.contains(firstValue)).toBe(true);
  });

  it("should return false when the tree doesnt contains the node", () => {
    const binarySearchTree = new BinarySearchTree();

    expect(binarySearchTree.contains(14)).toBe(false);
  });

  it("should return false when search for the value in the left side of the tree and it is not found", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 7;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);

    expect(binarySearchTree.contains(5)).toBe(false);
  });
  it("should return false when check if the value is in the right side of the tree and it is not found", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 20;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);

    expect(binarySearchTree.contains(14)).toBe(false);
  });

  it("should check if the tree contains the the root's left node", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 7;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);

    expect(binarySearchTree.contains(secondValue)).toEqual(true);
  });

  it("should check if the value is contains the root's right node", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 15;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);

    expect(binarySearchTree.contains(secondValue)).toEqual(true);
  });

  it("should check if the tree contains the left node of the first left child node of the root", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 9;
    const thirdValue = 3;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);

    expect(binarySearchTree.contains(thirdValue)).toEqual(true);
  });

  it("should check if the tree contains the right node of the first left child node of the root", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 9;
    const thirdValue = 11;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);

    expect(binarySearchTree.contains(thirdValue)).toEqual(true);
  });

  it("should check if the tree contains the left node of the first right child node of the root", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 55;
    const thirdValue = 30;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);

    expect(binarySearchTree.contains(thirdValue)).toEqual(true);
  });

  it("should check if the tree contains the right node of the first right child node of the root", () => {
    const binarySearchTree = new BinarySearchTree();

    const firstValue = 12;
    const secondValue = 55;
    const thirdValue = 65;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);

    expect(binarySearchTree.contains(thirdValue)).toEqual(true);
  });
});
