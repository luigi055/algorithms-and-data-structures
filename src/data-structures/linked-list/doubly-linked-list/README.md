# Doubly Linked List.

## What is it?

Doubly Linked List is **almost** identical to Singly Linked Lists except every node has another pointer, to the **previous** node!

The usage of prev pointers makes it possible to move/iterate backwards at the expense of two-times memory usage requirement as now each vertex records one additional pointer. The positive side effect of this ability to move backwards is now we can address the weak removal at tail case of the Singly Linked List.

## Comparisons with Singly Linked Lists

- Better for finding nodes and can be done in half the time.
- It take uo more memory considering the extra pointer.
- **More memory === More flexibility.** (It's **almost** always a tradeoff).

## Big O compared with arrays and Singly Linked List

Data Structure | average | Worst | Worst
| Access | Search | Insertion | Deletion| Access | SearWorstch | Insertion | Deletion

| Data Structure     | average |        |           |          | Worst  |        |           |          | Worst |
| :----------------- | :-----: | :----: | :-------: | :------: | :----: | :----: | :-------: | :------: | :---: |
|                    | Access  | Search | Insertion | Deletion | Access | Search | Insertion | Deletion |       |
| Doubly Linked List |  O(N)   |  O(N)  |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   | O(N)  |
| Singly Linked List |  O(N)   |  O(N)  |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   | O(N)  |
| Array              |  O(1)   |  O(N)  |   O(N)    |   O(N)   |  O(1)  |  O(N)  |   O(N)    |   O(N)   | O(N)  |

_Technically Searching in Doubly linked list is **O(n / 2)** but that's still O(N)_
