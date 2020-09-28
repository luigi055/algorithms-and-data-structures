# Dijkstra's Algorithm

It's is one of the most famous and widely used algorithms around!
find the shortest path between two vertices on a graph.

It is a algorithm created by __Edsger Dijkstra__ who was a Dutch Porgammer, physicist, essayist, and all around smarty-pants, He helped to advance the field of computer science from an "art" to an academic discipline.

Many of his discoveries and algorithms are still commonly used to this day.

## The Approach simplified

1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
2. Once we've moved to the node we're going to visit, we look at each of its neighbors.
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the stating node.
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.