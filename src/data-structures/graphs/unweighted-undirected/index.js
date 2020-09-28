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

  depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this._adjacencyList;

    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]){
                return dfs(neighbor)
            }
        });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start]
    const result = []
    const visited = {}
    let currentVertex;

    visited[start] = true;

    while(stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex)

      this._adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this._adjacencyList[currentVertex].slice().reverse().forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }

    return result;
  }
}

export default Graph