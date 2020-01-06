# QUEUES

Queue is another Abstract Data Type in which the items in the collection are kept in order and the main operations on the collection are the addition of items to the back position (enqueue) and removal of items from the front position (dequeue).

It is known as First-In-First-Out (FIFO) data structure as the first item to be enqueued will eventually be the first item to be dequeued, as in real life queues.

Examples of FIFO:

Queues exist everywhere! Think about the last time you waited in line...

## How do we use them in programming?

- Background tasks
- Uploading resources.
- Printing / Task processing

## Big O compared with arrays and Linked Lists

| Data Structure     | Time Complexity |        |           |          |        |        |           |          | Space Complexity |
| :----------------- | :-------------: | :----: | :-------: | :------: | :----: | :----: | :-------: | :------: | :--------------: |
|                    |     average     |        |           |          | Worst  |        |           |          |      Worst       |
|                    |     Access      | Search | Insertion | Deletion | Access | Search | Insertion | Deletion |                  |
| Queue              |      O(N)       |  O(N)  |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   |       O(N)       |
| Stack              |      O(N)       |  O(N)  |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   |       O(N)       |
| Doubly Linked List |      O(N)       |  O(N)  |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   |       O(N)       |
| Singly Linked List |      O(N)       |  O(N)  |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   |       O(N)       |
| Array              |      O(1)       |  O(N)  |   O(N)    |   O(N)   |  O(1)  |  O(N)  |   O(N)    |   O(N)   |       O(N)       |
