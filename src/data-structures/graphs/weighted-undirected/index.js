class Node {
  constructor(value, weight) {
    this.node = value;
    this.weight = weight
  }
}

class Graph {
  constructor() {
    this._adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this._adjacencyList[vertex]) {
      this._adjacencyList[vertex] = [];
    }
  }

  addEdge(vertexOne, vertexTwo, weight) {
    this._adjacencyList[vertexOne].push(new Node(vertexTwo, weight))
    this._adjacencyList[vertexTwo].push(new Node(vertexOne, weight))
  }
}

export default Graph;