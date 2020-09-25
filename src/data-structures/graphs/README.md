# Graphs

graphs is a collection of nodes and connections between those nodes

## Uses for Graphs

  - Social Networks
  - Location / Mapping
  - Routing Algorithms
  - Visual Hierarchy
  - File System Optimizations
  - Everywhere!

## Essential Graph Terms
  - __Vertex__: a node.
  - __Edge__: connection between nodes.

## Types of Graphs
  - __Weighted/Unweighted__: values assigned to distances between vertices.
  - __Directed/Undirected__: directions assigned to distanced between vertices.

  ### Directed vs Undirected 
    - Undirected is represented by line edges and can be traversed for all connected vertices. example: Facebook friend connections.
    - Directed is represented by arrows and only can go to one direction. example: Instagram Followers.

  ### Weighted Graph vs Unweighted Graph

    - Unweighted Graphs - Edges don't have values associated to them.
    - Weighted Graphs - Every Edge has a value associated to each edge: example. Google maps direction between two points.

## Storing Graphs
 There are two standard approaches:
  - Adjacency Matrix
  - Adjacency List

  ### Adjacency Matrix
  [Adjacency Matrix in Wikipedia](https://en.wikipedia.org/wiki/Adjacency_matrix)

  ### Adjacency List
    Using a List or array to store the edges, also if you want to store strings your could also use hash tables.

  ### Differences between Adjacency Matrix and Adjacency List in Big O
  __|V|__ = number of vertices.
  __|E|__ = number of edges.

|   __OPERATION__   | __ADJACENCY LIST__ |  __ADJACENCY MATRIX__  |
| :---------------- | :----------------- | :--------------------- |
| Add Vertex        | ```O(1)```         | ```O(|V^2|)```         |
| Add Edge          | ```O(1)```         | ```O(1)```             |
| Remove Vertex     | ```O(|V| + |E|)``` | ```O(|V^2|)```         |
| Remove Edge       | ```O(|E|)```       | ```O(1)```             |
| Query             | ```O(|V| + |E|)``` | ```O(1)```             |
| Storage           | ```O(|V| + |E|)``` | ```O(|V^2|)```         |

### Adjacency List Vs Adjacency Matrix

| __Adjacency List__ | __Adjacency Matrix__ |
| :----------------- | :------------------- |
| ✔ Can take up less space (in sparse graphs) | ❌ Takes up more space (in sparse graphs) |
| ✔ Faster to iterate over all edges | ❌ Slower to iterate over all edges |
| ❌ Can be slower to lookup specific edge | ✔ Faster to lookup specific edge |


### In this example we're going to implement an Adjacency List

why?... Most data in the real-world tends to lend itself to sparser and/or larger graphs

## Graph Traversals

Traversal means Visiting / Updating / Checking each vertex in a graph

## Graph Traversal Uses
  - Peer to Peer networking
  - Web Crawlers
  - Finding "closest" matches/recommendations
  - Shortest path problems
    -- GPS Navigation
    -- Solving Mazes
    -- AI (shortest path to win the game)