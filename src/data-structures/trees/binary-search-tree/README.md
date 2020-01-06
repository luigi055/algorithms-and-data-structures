# Binary Search Trees.

BST are special case of a Binary tree which is a type of a tree.
so, they're tree that have at most two children per node, And on top of that binary search trees are sorted in a particular way they are kept in an order.

BST are used to store data that can be compared, that is sortable so often classically we're talking about numbers.

the child that is smaller than the root node is putted at the left side and the larger is placed to the right.

To recap.

A Binary Search Tree (BST) is a binary tree in which each vertex has only up to 2 children that satisfies BST property: All vertices in the left subtree of a vertex must hold a value smaller than its own and all vertices in the right subtree of a vertex must hold a value larger than its own.

- Every parent node has at most **Two** children.
- Every node to the left of a parent node is **always less** than the parent.
- Every node to the right of a parent node is **always greater** than the parent.

## AVL Tree

An Adelson-Velskii Landis (AVL) tree is a self-balancing BST that maintains it's height to be O(log N) when having N vertices in the AVL tree.

## Big O of the Binary Search Tree

Insertion - O(log n)
searching - O(log n)

**NOT guaranteed!**

### Compared with others Data Structures

| Data Structure     | Time Complexity |          |           |          |        |        |           |          | Space Complexity |
| :----------------- | :-------------: | :------: | :-------: | :------: | :----: | :----: | :-------: | :------: | :--------------: |
|                    |     average     |          |           |          | Worst  |        |           |          |      Worst       |
|                    |     Access      |  Search  | Insertion | Deletion | Access | Search | Insertion | Deletion |                  |
| Binary Search Tree |    O(Log N)     | O(Log N) | O(Log N)  | O(Log N) |  O(N)  |  O(N)  |   O(1)    |   O(1)   |       O(N)       |
| Queue              |      O(N)       |   O(N)   |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   |       O(N)       |
| Stack              |      O(N)       |   O(N)   |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   |       O(N)       |
| Doubly Linked List |      O(N)       |   O(N)   |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   |       O(N)       |
| Singly Linked List |      O(N)       |   O(N)   |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   |       O(N)       |
| Array              |      O(1)       |   O(N)   |   O(N)    |   O(N)   |  O(1)  |  O(N)  |   O(N)    |   O(N)   |       O(N)       |
