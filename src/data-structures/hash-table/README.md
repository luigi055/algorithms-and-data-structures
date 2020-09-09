# Hash Table

Also known as Hash Map. It's a data structure used to store key-value pairs. They are like arrays or list, but the keys are not ordered.

Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

## Why should I care?

Nearly every programming language has some sort of hash table data structure. Because of their speed, has tables are very commonly used!

## Hash tables in the Wild

Python has Dictionaries.
Javascript has Objects and Maps.
Java, Go & Scala have Maps
Ruby has Hashes...

## Let's implement our own version of Hash Table in JS just for learning purpose.

We will be implement hash table using an Array

In order to look up values by key, we need a way to __convert keys into valid array indices__.

A function that performs this task is called a __hash function__.

[Read more about hash function](https://en.wikipedia.org/wiki/Hash_function)

## What makes a good Hash? (not a cryptographically secure one)

1. Fast (i.e. constant time).
2. Doesn't cluster outputs at specific indices, but distributes uniformly.
3. Deterministic (Same input yields same output).

## bad examples

__slow version of hash:__

```
function slowHash (key) {
  for (var i = 0; i < 10000; i++){
    console.log("everyday i'm hashing");
  }
  return key[0].charCodeAt(0);
}

```

__no uniformly distributes values__

```
function sameHashedValue (key) {
  return 0;
}
```

__No deterministic__

```
function randomHash(key) {
  return Math.floor(Math.random() * 1000);
}
```

## Prime numbers? wut.

The prime number in the hash is helpful in spreading out the keys more uniformly.

It's also helpful if the array that you're putting values into has prime length.

You don't need to know why. (Math is complicated!) But here are some links if you're curious.

[why do hash functions use prime numbers](https://computinglife.wordpress.com/2008/11/20/why-do-hash-functions-use-prime-numbers/)
[Does making array size a prime number help in hash table implementation?](Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why)

## Dealing with collisions

Even with a large array and a great hash function, collisions are inevitable.

There are many strategies for dealing with collisions, but we'll focus on two:

- Separate Chaining.
- Linear probing.

### Separate Chaining:

With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).

This allows us to store multiple key-value pairs at the same index.

This pattern will be implemented in this example of Hash Table.

### Linear probing

With linear probing, when we find a collision, we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value at each index.