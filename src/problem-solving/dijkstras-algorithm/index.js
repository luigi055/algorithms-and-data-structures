import PriorityQueue from '../../data-structures/trees/binary-heap/priority-queue';
import Graph from '../../data-structures/graphs/weighted-undirected';

// find shortest path between 2 nodes
class Dijkstra extends Graph {
  dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // build up initial state
    for (let vertex in this._adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(Infinity, vertex);
      }

      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        // WE'RE OONE
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break; // stop loop
      }
      if (smallest || distances[smallest] !== Infinity) {
         for (let neighbor in this._adjacencyList[smallest]) {
           // find nighboring nodes
           let nextNode = this._adjacencyList[smallest][neighbor]
           // calculate new distance tp neighboring nodes
           let candidate = distances[smallest] + nextNode.weight;
           let nextNeighbor = nextNode.node;
           if (candidate < distances[nextNode.node]) {
             // updating new smallest distances to neighbor
             distances[nextNeighbor] = candidate;
             // update previous - How we got to neighbor
             previous[nextNeighbor] = smallest;

             // enqueue in priority queue with new priority
             nodes.enqueue(candidate, nextNeighbor);
           }
         }
      }
    }
    return [...path, ...smallest].reverse();
  }
}

export default Dijkstra