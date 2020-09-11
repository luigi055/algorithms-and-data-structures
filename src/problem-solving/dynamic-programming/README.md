# Dynamic Programming

A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solution.

## It only works on problems with...
Optimal substructure & Overlapping subproblems


## Overlapping subproblems
A probelm is said to have __Overlapping subproblems__ if it can be broken down into subproblems which are reused several times

## Optimal Substructures

A problem is said to have __Optimal substructure__ if an optimal solution can be constructed from optimal solutions of its subproblems

## Dynamic programming uses past knowledge to make solving a future problem easier
## Memoization

Storing the results of expensive function calls and returning the cached result when the same inputs occur again.


### Time Complexity on memoization solutions and Top-Down recursion.

since Array, objects are constants when inserting and get however in the solution with memoization + recursion for fibonacci we improve our time complexity from O(2^n) to O(n) since this time we're saving the new values in linear time and then when needed we get the value from the array.

Using recursion in javascript we could reach to maximun call stack when for example using the fibonacci(10000). so in javascript due to the call stack limit we have to double check our implementation or using the imperative way using for loops.


### Iterate Bottom-up memoization.

### Tabulation Approach
Storing the result of a previous result in a "table" (usually an array), usually done using _iteration__ to achieve a Better __space complexity__ using tabulation.

In our example using tabulation with the fibonacci function since it is not using recursion you could enter big numbers as arguments without worrying about the call stack.

with this approach it doesn't matter if you invoke fibonacci(100) or fibonacci(10000) it always fetches the result. even _Infinity_ or if you use BigInt you could get more numbers
