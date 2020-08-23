# Binary Heap

Binary Heap is very similar to a binary search tree, but with some different rules!

In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes.

## Why do we need to know this.

- Binary Heaps are used to implement Priority Queues, which are **very** commonly used data structures.

- They are also used quite a bit, with **Graph Traversal** algorithms.

## Easy representation of Binary Heap (Tree).

There's an easy way of storing a Binary Heap... A List/Array.

## Representing a Max Binary Heap using an array
```
100
  ---------
      |   |
      19  36
      -------------------
              |  |  |  |
              17 12 25 5
              -----------------------------------------------------
                            |   |   |   |   |   |   |   |
                            9   15  6   11  13  8   1   4

[100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
```

To get the relationship between father and children nodes
there is a simple mathematical formula to bind them

```
For any index of an array n...
The left child is sotred at 2n + 1
The right Child is at 2n +2
```

#### an example
In order to get the left child for the number 12 in the example (which is the right child of the left child of root) you could use the formula

```
index:   0   1   2   3   4   5   6  7  8   9  10  11  12 13 14
array: [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
```

note that the 12 is the index number 4 of the array. so to get its left child apply the formula:
2*4+1 = 9

```
const binaryHeapStorage = [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
const getLeftChildIndex = n => 2*n+1
const getRightChildIndex = n => 2*n+2

const leftChildIndex = getLeftChildIndex(4) // 9
const rightChildIndex = getRightChildIndex(4) // 9
binaryHeapStorage[leftChildIndex] // 6
binaryHeapStorage[rightChildIndex] // 11
```

### What if we want have a child node and want to find its parent?

It uses the same formula but in oposite direction


```
For any child node at index n...
Its parent is at index Math.floor((n-1)/2)
```

#### an example

#### an example
In order to get the number 12's father in the example (which is the right child of the left child of root) you could use the formula

```
index:   0   1   2   3   4   5   6  7  8   9  10  11  12 13 14
array: [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
```

note that the 12 is the index number 4 of the array. so to get its left child apply the formula:
(4-1)/2 = 1.5
floored 1.5 = 1
```
const binaryHeapStorage = [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
const getNodeFather = n => Math.floor((n-1)/2)

const fatherIndex = getNodeFather(4) // 1
binaryHeapStorage[fatherIndex] // 19
```
