import BinarySearchTreeDFSTraversal from "./index";

describe("Testing the Depth-first search traversal algorithm", () => {
  describe("Testing Depth-first Search - preOrder algorithm", () => {
    it("should return an empty array when invoke the DFSPreOrder method in a empty binary search tree", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      expect(binarySearchTree.DFSPreOrder()).toEqual([]);
    });

    it("should contain the 12 when insert this value to the DFSPreOrder when invoke the BFS method", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      const firstValue = 12;

      binarySearchTree.insert(firstValue);

      expect(binarySearchTree.DFSPreOrder()).toEqual([firstValue]);
    });

    it("should contain the [12, 6, 15] when insert these value to the BST when invoke the DFSPreOrder method", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      const firstValue = 12;
      const secondValue = 15;
      const thirdValue = 6;

      binarySearchTree.insert(firstValue);
      binarySearchTree.insert(secondValue);
      binarySearchTree.insert(thirdValue);

      expect(binarySearchTree.DFSPreOrder()).toEqual([
        firstValue,
        thirdValue,
        secondValue
      ]);
    });

    it("should contain the [12, 6, 5, 11, 15, 30, 50] when insert these value to the BST when invoke the DFSPreOrder method", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      binarySearchTree.insert(12);
      binarySearchTree.insert(6);
      binarySearchTree.insert(15);
      binarySearchTree.insert(30);
      binarySearchTree.insert(5);
      binarySearchTree.insert(50);
      binarySearchTree.insert(11);

      expect(binarySearchTree.DFSPreOrder()).toEqual([
        12,
        6,
        5,
        11,
        15,
        30,
        50
      ]);
    });
  });

  describe("Testing Depth-first Search - postOrder algorithm", () => {
    it("should return an empty array when invoke the DFSPostOrder method in a empty binary search tree", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      expect(binarySearchTree.DFSPostOrder()).toEqual([]);
    });

    it("should contain the 12 when insert this value to the DFSPostOrder when invoke the BFS method", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      const firstValue = 12;

      binarySearchTree.insert(firstValue);

      expect(binarySearchTree.DFSPostOrder()).toEqual([firstValue]);
    });

    it("should contain the [6, 15, 12] when insert these value to the BST when invoke the DFSPostOrder method", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      const firstValue = 12;
      const secondValue = 15;
      const thirdValue = 6;

      binarySearchTree.insert(firstValue);
      binarySearchTree.insert(secondValue);
      binarySearchTree.insert(thirdValue);

      expect(binarySearchTree.DFSPostOrder()).toEqual([
        thirdValue,
        secondValue,
        firstValue
      ]);
    });

    it("should contain the [5, 11, 6, 50, 30, 15, 12] when insert these value to the BST when invoke the DFSPostOrder method", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      binarySearchTree.insert(12);
      binarySearchTree.insert(6);
      binarySearchTree.insert(15);
      binarySearchTree.insert(30);
      binarySearchTree.insert(5);
      binarySearchTree.insert(50);
      binarySearchTree.insert(11);

      expect(binarySearchTree.DFSPostOrder()).toEqual([
        5,
        11,
        6,
        50,
        30,
        15,
        12
      ]);
    });
  });

  describe("Testing Depth-first Search - InOrder algorithm", () => {
    it("should return an empty array when invoke the DFSInOrder method in a empty binary search tree", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      expect(binarySearchTree.DFSInOrder()).toEqual([]);
    });

    it("should contain the 12 when insert this value to the DFSInOrder when invoke the BFS method", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      const firstValue = 12;

      binarySearchTree.insert(firstValue);

      expect(binarySearchTree.DFSInOrder()).toEqual([firstValue]);
    });

    it("should contain the [6, 12, 15] when insert these value to the BST when invoke the DFSInOrder method", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      const firstValue = 12;
      const secondValue = 15;
      const thirdValue = 6;

      binarySearchTree.insert(firstValue);
      binarySearchTree.insert(secondValue);
      binarySearchTree.insert(thirdValue);

      expect(binarySearchTree.DFSInOrder()).toEqual([6, 12, 15]);
    });

    it("should contain the [5, 6, 11, 12, 15, 30, 50] when insert these value to the BST when invoke the DFSInOrder method", () => {
      const binarySearchTree = new BinarySearchTreeDFSTraversal();

      binarySearchTree.insert(12);
      binarySearchTree.insert(6);
      binarySearchTree.insert(15);
      binarySearchTree.insert(30);
      binarySearchTree.insert(5);
      binarySearchTree.insert(50);
      binarySearchTree.insert(11);

      expect(binarySearchTree.DFSInOrder()).toEqual([5, 6, 11, 12, 15, 30, 50]);
    });
  });
});
