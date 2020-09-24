// Implementation of a Undirected Graph with adjacency List
class Graph {
  constructor() {
    this._adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this._adjacencyList[vertex]) {
      this._adjacencyList[vertex] = []
    }
  }

  removeVertex(vertexToRemove) {
    this._adjacencyList[vertexToRemove].forEach(vertex => this.removeEdge(vertexToRemove,vertex));
    delete this._adjacencyList[vertexToRemove];
  }

  addEdge(vertexOne, vertexTwo) {
    this._adjacencyList[vertexOne].push(vertexTwo)
    this._adjacencyList[vertexTwo].push(vertexOne)
  }

  removeEdge(vertexOne, vertexTwo) {
    this._adjacencyList[vertexOne] = this._adjacencyList[vertexOne].filter(vertex => vertex !== vertexTwo)
    this._adjacencyList[vertexTwo] = this._adjacencyList[vertexTwo].filter(vertex => vertex !== vertexOne)
  }
}

export default Graph