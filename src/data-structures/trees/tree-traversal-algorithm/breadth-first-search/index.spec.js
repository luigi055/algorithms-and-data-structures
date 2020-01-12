import BinarySearchTreeBFSTraversal from "./index";

describe("Testing the Breadth-first search traversal algorithm", () => {
  it("should return an empty array when invoke the BFS method in a empty binary search tree", () => {
    const binarySearchTree = new BinarySearchTreeBFSTraversal();

    expect(binarySearchTree.BFS()).toEqual([]);
  });

  it("should contain the 12 when insert this value to the BST when invoke the BFS method", () => {
    const binarySearchTree = new BinarySearchTreeBFSTraversal();

    const firstValue = 12;

    binarySearchTree.insert(firstValue);

    expect(binarySearchTree.BFS()).toEqual([firstValue]);
  });

  it("should contain the [12, 6, 15] when insert these value to the BST when invoke the BFS method", () => {
    const binarySearchTree = new BinarySearchTreeBFSTraversal();

    const firstValue = 12;
    const secondValue = 15;
    const thirdValue = 6;

    binarySearchTree.insert(firstValue);
    binarySearchTree.insert(secondValue);
    binarySearchTree.insert(thirdValue);

    expect(binarySearchTree.BFS()).toEqual([
      firstValue,
      thirdValue,
      secondValue
    ]);
  });

  it("should contain the [12, 6, 15, 5, 11, 30, 50] when insert these value to the BST when invoke the BFS method", () => {
    const binarySearchTree = new BinarySearchTreeBFSTraversal();

    const expectedNumbers = [12, 6, 15, 5, 11, 30, 50];

    binarySearchTree.insert(12);
    binarySearchTree.insert(6);
    binarySearchTree.insert(15);
    binarySearchTree.insert(30);
    binarySearchTree.insert(5);
    binarySearchTree.insert(50);
    binarySearchTree.insert(11);

    expect(binarySearchTree.BFS()).toEqual(expectedNumbers);
  });
});
