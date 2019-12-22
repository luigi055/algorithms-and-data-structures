# Linked List.

## What is it?

It's a data structure that contains a **head**, **tail** and **length** property.

Linked lists of nodes, and each **node** has a **value** and a **pointer** to another node or null

## Comparisons with Arrays:

### List

- Do not have indexes!
- Connected via nodes with a next pointer.
- Random access is not allowed

### Arrays

- Indexed in order!
- Insertion and deletion can be expensive.
- Can quickly be accessed at a specific index.

## Big O compared with arrays

Data Structure | average | Worst | Worst
| Access | Search | Insertion | Deletion| Access | SearWorstch | Insertion | Deletion

| Data Structure     | average |        |           |          | Worst  |        |           |          | Worst |
| :----------------- | :-----: | :----: | :-------: | :------: | :----: | :----: | :-------: | :------: | :---: |
|                    | Access  | Search | Insertion | Deletion | Access | Search | Insertion | Deletion |       |
| Singly Linked List |  O(N)   |  O(N)  |   O(1)    |   O(1)   |  O(N)  |  O(N)  |   O(1)    |   O(1)   | O(N)  |
| Array              |  O(1)   |  O(N)  |   O(N)    |   O(N)   |  O(1)  |  O(N)  |   O(N)    |   O(N)   | O(N)  |

## When to use it?

Singly Linked List excel at insertion and deletion compared to an array, so if you're concerned about and you don't need random access, you just need to have some data represented in a list with an order but you don't need to just access the 50th item or the millionth item.
you just need access it in order then a length list might be what you want if you're concerned about insertion and removal items and you don't care so much about random access

To Recap:

- Singly Linked List are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
- Arrays contain a built in index whereas Linked Lists do not.
- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues.
