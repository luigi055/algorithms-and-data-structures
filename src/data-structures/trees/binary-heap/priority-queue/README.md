## Priority Queue
A data structure where each element has a priority.
Elements with higher priorities are served before elements.

a priority Queue is an abstract concept, it could be implemented as we want.

### Intention:

- Write a Min Binary Heap - lower number means higher priority
- Each Node has a val and a priority. Use the priority to build the heap.
- __Enqueue__ method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
- __Dequeue__ method removes root elemenet, returns it, and rearranges heap using priority.