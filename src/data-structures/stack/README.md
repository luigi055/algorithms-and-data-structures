# Stack

Stack is a particular kind of Abstract Data Type in which the main operations on the collection are the addition of an item to the collection, known as push, only to the top of the stack and removal of an item, known as pop, only from the top of the stack.

It is known as Last-In-First-Out (LIFO) data structure.

**STACK IS A CONCEPT AND THERE IS MORE THAN ONE WAY OF IMPLEMENTING A STACK**

## What is a LIFO data structure?

A LIFO is a abbrevation of Last-In-First-Out, and it's a principle in which the last element added to the stack will be the first element removed from the stack.

Example.

Think about a stack of **plates**, or a stack of **markers**, or a stack of ...**anything**.

As you pile it up the last thing (or the topmost thing) is what gets removed first.

## Where Stacks are used?

- Managing function invokations (Call stack).
- Undo / Redo.
- Routing (The history object) is treated like a stack!

## Stack and Big O

In most implementations and also in this visualization, Stack is basically a protected (Singly) Linked List where we can only peek at the head item, push a new item only to the head, and pop existing item only from the head. All operations are O(1).
